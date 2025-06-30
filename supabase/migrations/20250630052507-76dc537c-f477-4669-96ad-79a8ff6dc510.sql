
-- Insert the new water crisis article
INSERT INTO articles (
  id,
  title,
  excerpt,
  content,
  category,
  date,
  image_url,
  likes
) VALUES (
  gen_random_uuid(),
  'Africa''s Water Crisis: The fight to protect our Blue Gold',
  'Water as life, it nourishes our crops, drives African economies, and sustains the breath-taking ecosystems that define our continent. Yet today, this precious resource is under immense pressure.',
  'Article by: Timothy Dube, Ph.D.
Director, Institute for Water Studies (IWS). Professor, Department of Earth Science, University of the Western Cape. Adjunct Professor, United Nations Flores University, Dresden, Germany. Editor in Chief (EiC), Current Opinion in Environmental Sustainability (COSUST), Elsevier. Associate Editor, International Journal of Applied Earth Observation and Geoinformation (JAG), Elsevier.
Associate Editor, Remote Sensing Applications: Society and Environment, (RSASE), Elsevier. Executive SI Guest Editor - International Journal of Applied Earth Observation and Geoinformation - EO and Climate Extremes in Arid Environments.

Review Editor: UN GEO-7 report.

Water as life, it nourishes our crops, drives African economies, and sustains the breath-taking ecosystems that define our continent. From the flowing Nile to the wetlands of the Okavango, from Lake Victoria, mighty Zambezi to underground aquifers stretching beneath the Sahel, Africa''s blue gold is as vital as the air we breathe. Yet today, this precious resource is under immense pressure. Across the continent, whether in the dynamic urban centres of Addis Ababa, Johannesburg, Lagos, and Nairobi or in the rural villages nestled along riverbanks, water pollution and climate change are converging in ways that threaten our health, livelihoods, and future prosperity.

Climate change is no longer a distant threat. It is reshaping Africa''s water landscape in real time. Rising temperatures, erratic rainfall patterns, and more frequent and severe droughts and floods are pushing our water systems to the brink. These climate-induced extremes are not only reducing water availability but also worsening water quality. When heavy rains come, they do not replenish. They wash. They wash plastic waste, industrial chemicals, untreated sewage, and agricultural runoff into our rivers and lakes. They infiltrate aquifers and wetlands, turning once pristine water sources into health hazards. As contamination rises, the cost and complexity of purification escalate. Many treatment plants, already operating under strain, are ill equipped to cope, hampered by aging infrastructure, limited capacity, and insufficient funding. The result is that millions of people across Africa are left without reliable access to clean, safe drinking water.

In many regions, the crisis is compounded by prolonged droughts and declining river flows. There is less water to treat and distribute, further deepening water scarcity. Yet, paradoxically, many water purification systems still rely on fossil fuel-based energy, feeding the very climate crisis that is intensifying the problem. It is a vicious cycle. Dwindling water supplies demand more energy to treat, and the more we depend on carbon intensive energy, the more we accelerate climate change.

But there is hope. This cycle can be broken, and the power to change the narrative lies with all of us. From households to governments, from civil society to the private sector, we all have a role to play. In our homes, water conservation begins with everyday choices. Fix leaking taps, harvest rainwater, and use eco-friendly detergents and cleaning products that do not pollute our waterways. Educate your family about the importance of wetlands, rivers, and lakes, which are natural ecosystems that play a vital role in purifying water and supporting biodiversity. In our communities, collective action drives impact. Join or start local clean-up drives, report illegal dumping, and advocate for responsible waste management. Schools and youth organizations can lead the way by planting trees, restoring degraded riverbanks, and promoting sustainable agricultural practices that protect our water sources from erosion and contamination.

At the national level, urgent investment is needed in modern, climate resilient water infrastructure. Governments must prioritize access to renewable energy for water treatment, develop integrated water resource management plans, and enforce environmental regulations that protect critical ecosystems. Importantly, water governance must be inclusive, drawing on the voices, experiences, and knowledge systems of local communities, particularly women and indigenous groups who are often on the frontlines of water stewardship.

The urgency is undeniable. As the impacts of climate change intensify, so too does the risk of widespread water insecurity. Yet, in the face of adversity, Africa''s greatest strength is its people—resourceful, innovative, and deeply connected to the land and waters that sustain them. We have the tools. We have the knowledge. What we need now is the will, political, social, and individual, to act. By working together, we can safeguard our water, build resilient communities, and secure a future where every African, regardless of geography or income, has access to clean, safe water.

Because without water, there is no life. And without clean water, there can be no just, healthy, or sustainable future. Let us rise to this challenge, not just for ourselves, but for the generations yet to come.',
  'Climate Action',
  CURRENT_DATE,
  'abecb3ff-6c79-46b8-bb20-321de7c4aade.png',
  0
);

-- Also insert into article_likes table for the new article
INSERT INTO article_likes (id, likes)
SELECT id, 0 FROM articles WHERE title = 'Africa''s Water Crisis: The fight to protect our Blue Gold';
