create or replace function public.normalize_article_plain_text(raw_content text)
returns text
language plpgsql
immutable
as $$
declare
  normalized text;
  block text;
  line text;
  lines text[];
  output text := '';
  is_bullet boolean;
begin
  if raw_content is null then
    return '';
  end if;

  normalized := regexp_replace(raw_content, E'\r\n?', E'\n', 'g');

  foreach block in array regexp_split_to_array(normalized, E'\n{2,}') loop
    block := btrim(block);
    if block = '' then
      continue;
    end if;

    lines := regexp_split_to_array(block, E'\n');
    is_bullet := true;

    foreach line in array lines loop
      line := btrim(line);
      if line = '' then
        continue;
      end if;

      if line !~ E'^[-•*]\s+' then
        is_bullet := false;
        exit;
      end if;
    end loop;

    if output <> '' then
      output := output || E'\n\n';
    end if;

    if is_bullet then
      output := output || '<ul>';
      foreach line in array lines loop
        line := btrim(line);
        if line = '' then
          continue;
        end if;

        output := output || '<li>' || regexp_replace(line, E'^[-•*]\s+', '') || '</li>';
      end loop;
      output := output || '</ul>';
    else
      output := output || '<p>' || replace(block, E'\n', '<br />') || '</p>';
    end if;
  end loop;

  return output;
end;
$$;

update public.articles
set content = public.normalize_article_plain_text(content)
where content !~* E'<\s*(article|section|p|ul|ol|li|h[1-6]|blockquote|hr|br|div)\b';