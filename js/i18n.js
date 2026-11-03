// App-owned copy only. User-authored questions, notes, messages and text-field values are never machine-translated.
export const languages=['en','si','ta'];let active='en';
const rows=`
← Back to formats|← ආකෘති වෙත ආපසු|← வடிவங்களுக்குத் திரும்பு
Question banks|ප්‍රශ්න බැංකු|வினா வங்கிகள்
My papers|මගේ ප්‍රශ්න පත්‍ර|எனது வினாத்தாள்கள்
Marking schemes|ලකුණු දීමේ පටිපාටි|புள்ளியிடல் திட்டங்கள்
Update preview|පෙරදසුන යාවත්කාලීන කරන්න|முன்னோட்டத்தைப் புதுப்பி
Print / Save PDF|මුද්‍රණය / PDF ලෙස සුරකින්න|அச்சிடு / PDF சேமி
Editable Word (.docx)|සංස්කරණය කළ හැකි Word (.docx)|திருத்தக்கூடிய Word (.docx)
Paper backup (.json)|පත්‍රයේ උපස්ථය (.json)|வினாத்தாள் காப்பு (.json)
Complete question configuration first|පළමුව ප්‍රශ්න සැකසුම් සම්පූර්ණ කරන්න|முதலில் வினா அமைப்பை நிறைவு செய்யவும்
Enter valid title, subject, grade and duration|නිවැරදි මාතෘකාවක්, විෂයක්, ශ්‍රේණියක් සහ කාලයක් ඇතුළත් කරන්න|சரியான தலைப்பு, பாடம், தரம் மற்றும் நேரத்தை உள்ளிடவும்

minutes|විනාඩි|நிமிடங்கள்
min|විනාඩි|நிமி
marks|ලකුණු|புள்ளிகள்
required marks|අනිවාර්ය ලකුණු|தேவையான புள்ளிகள்
printed|මුද්‍රිත|அச்சிட்டவை
printed marks|මුද්‍රිත ලකුණු|அச்சிட்ட புள்ளிகள்
App language|යෙදුමේ භාෂාව|செயலியின் மொழி
English|ඉංග්‍රීසි|ஆங்கிலம்
Navigation language|යෙදුමේ භාෂාව|செயலியின் மொழி
Add questions before exporting|නිර්යාතයට පෙර ප්‍රශ්න එක් කරන්න|ஏற்றுமதிக்கு முன் வினாக்களைச் சேர்க்கவும்
Header and footer messages must be 300 characters or fewer|ශීර්ෂ හා පාද පණිවිඩ අක්ෂර 300කට සීමා කරන්න|தலைப்பு மற்றும் அடிக்குறிப்பை 300 எழுத்துகளுக்குள் எழுதவும்
Page numbering must start between 1 and 999|පිටු අංකය 1 සහ 999 අතර අගයකින් අරඹන්න|பக்க எண் 1 முதல் 999 வரை தொடங்க வேண்டும்
Border thickness must be between 0.5 and 4|රාමු ඝනකම 0.5 සහ 4 අතර විය යුතුය|கரைத் தடிமன் 0.5 முதல் 4 வரை இருக்க வேண்டும்
MISSING ANSWER — teacher review required|පිළිතුර නොමැත — ගුරුවරයා පරීක්ෂා කළ යුතුය|விடை இல்லை — ஆசிரியர் சரிபார்ப்பு தேவை
An oversized item needs reducing; check before printing.|විශාල අයිතමයක් කුඩා කළ යුතුය. මුද්‍රණයට පෙර පරීක්ෂා කරන්න.|பெரிய உருப்படியைக் குறைக்கவும்; அச்சிடுவதற்கு முன் சரிபார்க்கவும்.
Term|වාරය|தவணை
Document format|ලේඛන ආකෘතිය|ஆவண வடிவம்
More page and teacher details|තවත් පිටු සහ ගුරු තොරතුරු|மேலும் பக்க மற்றும் ஆசிரியர் விவரங்கள்
Pick questions for me|ස්වයංක්‍රීයව ප්‍රශ්න තෝරන්න|எனக்காக வினாக்களைத் தேர்ந்தெடு

Choose a format|ආකෘතියක් තෝරන්න|வடிவத்தைத் தேர்ந்தெடு
Choose your paper format|ඔබේ පත්‍ර ආකෘතිය තෝරන්න|உங்கள் வினாத்தாள் வடிவத்தைத் தேர்ந்தெடு
Choose format → Add questions → Print|ආකෘතිය තෝරන්න → ප්‍රශ්න එක් කරන්න → මුද්‍රණය කරන්න|வடிவம் தேர்வு → வினாக்கள் சேர் → அச்சிடு
Start with this format|මෙම ආකෘතියෙන් අරඹන්න|இந்த வடிவத்தில் தொடங்கு
Back to formats|ආකෘති වෙත ආපසු|வடிவங்களுக்குத் திரும்பு
Choose another format|වෙනත් ආකෘතියක් තෝරන්න|வேறு வடிவத்தைத் தேர்ந்தெடு
More edits|තවත් සංස්කරණ|மேலும் திருத்தங்கள்
More exports|තවත් අපනයන|மேலும் ஏற்றுமதிகள்
Ready to use. Open More edits only when you want to change the setup.|භාවිතයට සූදානම්. සැකසුම් වෙනස් කිරීමට පමණක් තවත් සංස්කරණ විවෘත කරන්න.|பயன்படுத்தத் தயார். அமைப்பை மாற்ற விரும்பினால் மட்டும் மேலும் திருத்தங்களைத் திறக்கவும்.
Revision Question Paper|පුනරීක්ෂණ ප්‍රශ්න පත්‍රය|மீட்டல் வினாத்தாள்
Select a family, then choose a ready-made paper. You can change details later.|ලේඛන වර්ගය සහ සූදානම් ආකෘතිය තෝරන්න. විස්තර පසුව වෙනස් කළ හැක.|வகையையும் முன்வடிவத்தையும் தேர்ந்தெடுங்கள். விவரங்களைப் பின்னர் மாற்றலாம்.
Language|භාෂාව|மொழி
Full papers and term tests|සම්පූර්ණ පත්‍ර සහ වාර පරීක්ෂණ|முழுத் தாள்களும் தவணைச் சோதனைகளும்
One lesson or selected topics|එක් පාඩමක් හෝ තෝරාගත් මාතෘකා|ஒரு பாடப்பகுதி அல்லது தேர்ந்த தலைப்புகள்
Quick quizzes and MCQ practice|කෙටි පරීක්ෂණ සහ බහුවරණ පුහුණුව|குறுஞ்சோதனைகளும் பல்தேர்வுப் பயிற்சியும்
Teach, explain and practise|ඉගැන්වීම, පැහැදිලි කිරීම සහ පුහුණුව|கற்பித்தல், விளக்கம் மற்றும் பயிற்சி
Summaries, formulas and diagrams|සාරාංශ, සූත්‍ර සහ රූප|சுருக்கங்கள், சூத்திரங்கள் மற்றும் படங்கள்
Organise questions with their sources|මූලාශ්‍ර සමඟ ප්‍රශ්න පෙළගස්වන්න|மூலங்களுடன் வினாக்களை ஒழுங்கமைக்கவும்
More page and teacher details|තවත් පිටු සහ ගුරු විස්තර|மேலும் பக்க மற்றும் ஆசிரியர் விவரங்கள்

Dashboard|මුල් පිටුව|முகப்பு
Create Paper|ප්‍රශ්න පත්‍රයක් සාදන්න|வினாத்தாள் உருவாக்கு
My Papers|මගේ ප්‍රශ්න පත්‍ර|எனது வினாத்தாள்கள்
Question Banks|ප්‍රශ්න බැංකු|வினா வங்கிகள்
Question Library|ප්‍රශ්න එකතුව|வினா நூலகம்
Teacher Profiles|ගුරු තොරතුරු|ஆசிரியர் விவரங்கள்
Teacher profiles|ගුරු තොරතුරු|ஆசிரியர் விவரங்கள்
Templates|පත්‍ර ආකෘති|வடிவமைப்புகள்
Marking Schemes|ලකුණු දීමේ පටිපාටි|புள்ளியிடல் திட்டங்கள்
Backup and Restore|උපස්ථ සහ ප්‍රතිස්ථාපනය|காப்புப்பிரதி மற்றும் மீட்டமைப்பு
Settings|සැකසුම්|அமைப்புகள்
More tools|තවත් මෙවලම්|மேலும் கருவிகள்
Workspace|වැඩබිම|பணிப்பகுதி
App language|යෙදුමේ භාෂාව|செயலியின் மொழி
English|ඉංග්‍රීසි|ஆங்கிலம்
Paper Studio|ප්‍රශ්න පත්‍ර වැඩබිම|வினாத்தாள் பணிப்பகம்
YOUR OFFLINE EXAM WORKSPACE|අන්තර්ජාලය නැතිවත් භාවිත කළ හැකි වැඩබිම|இணையமின்றி இயங்கும் தேர்வுப் பணிப்பகம்
OFFLINE PAPER STUDIO|ප්‍රශ්න පත්‍ර වැඩබිම|வினாத்தாள் பணிப்பகம்
YOUR PAPER WORKSPACE|ඔබේ ප්‍රශ්න පත්‍ර වැඩබිම|உங்கள் வினாத்தாள் பணிப்பகம்
Your questions.|ඔබේ ප්‍රශ්න.|உங்கள் வினாக்கள்.
Your classroom.|ඔබේ පන්ති කාමරය.|உங்கள் வகுப்பறை.
On this device.|මෙම උපාංගයේම.|இந்தச் சாதனத்தில்.
Local workspace ready|වැඩබිම සූදානම්|பணிப்பகுதி தயார்
Offline · local workspace ready|අන්තර්ජාලය නැත · වැඩබිම සූදානම්|இணையமில்லை · பணிப்பகுதி தயார்
What would you like to make?|ඔබට සෑදීමට අවශ්‍ය කුමක්ද?|நீங்கள் எதை உருவாக்க விரும்புகிறீர்கள்?
Your questions and papers, together in one simple workspace.|ඔබේ ප්‍රශ්න සහ ප්‍රශ්න පත්‍ර එකම සරල වැඩබිමක.|உங்கள் வினாக்களும் வினாத்தாள்களும் ஒரே எளிய பணிப்பகுதியில்.
START HERE|මෙතැනින් අරඹන්න|இங்கே தொடங்குங்கள்
A paper, made your way.|ඔබට අවශ්‍ය ආකාරයට ප්‍රශ්න පත්‍රයක්.|உங்கள் விருப்பப்படி ஒரு வினாத்தாள்.
Choose questions from your bank, then edit everything on the paper preview.|ප්‍රශ්න බැංකුවෙන් ප්‍රශ්න තෝරා පත්‍ර පෙරදසුන තුළම සංස්කරණය කරන්න.|வினா வங்கியிலிருந்து வினாக்களைத் தேர்ந்து முன்னோட்டத்திலேயே திருத்துங்கள்.
Choose · Edit · Print|තෝරන්න · සංස්කරණය කරන්න · මුද්‍රණය කරන්න|தேர்வு · திருத்தம் · அச்சிடல்
Create a paper|ප්‍රශ්න පත්‍රයක් සාදන්න|வினாத்தாள் உருவாக்கு
Create paper|ප්‍රශ්න පත්‍රයක් සාදන්න|வினாத்தாள் உருவாக்கு
New paper|නව ප්‍රශ්න පත්‍රයක්|புதிய வினாத்தாள்
Make your next paper|මීළඟ ප්‍රශ්න පත්‍රය සාදන්න|அடுத்த வினாத்தாளை உருவாக்குங்கள்
Choose questions and edit them directly on the page.|ප්‍රශ්න තෝරා පත්‍රය තුළම සංස්කරණය කරන්න.|வினாக்களைத் தேர்ந்து பக்கத்திலேயே திருத்துங்கள்.
Continue a paper|පත්‍රයක වැඩ නැවත අරඹන්න|வினாத்தாளைத் தொடருங்கள்
Open an illustrative mixed-content example|විවිධ අන්තර්ගත සහිත ආදර්ශයක් බලන්න|பல்வகை உள்ளடக்க மாதிரியைத் திறக்கவும்
Included samples are illustrative English questions. Import your subject question banks whenever you are ready.|ඇතුළත් කර ඇත්තේ ඉංග්‍රීසි ආදර්ශ ප්‍රශ්නයි. අවශ්‍ය විට ඔබේ විෂය ප්‍රශ්න බැංකු ඇතුළත් කරන්න.|உள்ளடங்கியவை ஆங்கில மாதிரி வினாக்கள். தேவையானபோது உங்கள் பாட வினா வங்கிகளை இறக்குமதி செய்யுங்கள்.
Your saved papers will appear here.|සුරැකි ප්‍රශ්න පත්‍ර මෙහි දිස්වේ.|சேமித்த வினாத்தாள்கள் இங்கே தோன்றும்.
Add questions. Edit the page. Print when ready.|ප්‍රශ්න එක් කරන්න. පත්‍රය සකසන්න. සූදානම් වූ විට මුද්‍රණය කරන්න.|வினாக்களைச் சேர்க்கவும். பக்கத்தைத் திருத்தவும். தயாரானதும் அச்சிடவும்.
Saved on this device|මෙම උපාංගයේ සුරැකී ඇත|இந்தச் சாதனத்தில் சேமிக்கப்பட்டது
Document format|ලේඛන වර්ගය|ஆவண வகை
What are you making?|ඔබ සෑදීමට යන්නේ කුමක්ද?|எதை உருவாக்குகிறீர்கள்?
Ready-made structure|සූදානම් කළ සැකිල්ල|முன்வடிவமைக்கப்பட்ட கட்டமைப்பு
Examination paper|විභාග ප්‍රශ්න පත්‍රය|தேர்வு வினாத்தாள்
Lesson test|පාඩම් පරීක්ෂණය|பாடச் சோதனை
Short paper|කෙටි ප්‍රශ්න පත්‍රය|குறு வினாத்தாள்
Tute / worksheet|නිබන්ධනය / ක්‍රියාකාරකම්|பாடத்தொகுப்பு / செயற்பாட்டுத் தாள்
Short notes|කෙටි සටහන්|சுருக்கக் குறிப்புகள்
Past-question collection|පසුගිය ප්‍රශ්න එකතුව|கடந்தகால வினாத் தொகுப்பு
Changing the structure keeps your content. Questions move into the first section; reassign them in Edit.|සැකිල්ල වෙනස් කළත් අන්තර්ගතය සුරැකේ. ප්‍රශ්න මුල් කොටසට යයි; සංස්කරණය මඟින් කොටස වෙනස් කළ හැක.|கட்டமைப்பை மாற்றினாலும் உள்ளடக்கம் பாதுகாக்கப்படும். வினாக்கள் முதல் பகுதிக்கு நகரும்; திருத்தத்தில் பகுதியை மாற்றலாம்.
Sections & instructions|කොටස් සහ උපදෙස්|பகுதிகளும் அறிவுறுத்தல்களும்
Add new content to|නව අන්තර්ගතය එක් කරන කොටස|புதிய உள்ளடக்கத்தைச் சேர்க்கும் பகுதி
Incomplete presets can be saved as drafts. Check them before distribution.|සම්පූර්ණ නොකළ පත්‍ර කෙටුම්පත් ලෙස සුරැකිය හැක. බෙදාහැරීමට පෙර පරීක්ෂා කරන්න.|முழுமையற்ற தாள்களை வரைவாகச் சேமிக்கலாம். பகிர்வதற்கு முன் சரிபார்க்கவும்.
Current structure checks passed.|වත්මන් සැකිල්ල පරීක්ෂාව සමත්.|தற்போதைய கட்டமைப்புச் சரிபார்ப்பு நிறைவுற்றது.
Paper details|පත්‍රයේ විස්තර|வினாத்தாள் விவரங்கள்
Paper title|පත්‍රයේ මාතෘකාව|வினாத்தாள் தலைப்பு
Grade|ශ්‍රේණිය|தரம்
Subject|විෂය|பாடம்
Science|විද්‍යාව|விஞ்ஞானம்
Mathematics|ගණිතය|கணிதம்
Time (minutes; 0 = untimed)|කාලය (මිනිත්තු; 0 = සීමාවක් නැත)|நேரம் (நிமிடங்கள்; 0 = வரம்பில்லை)
Teacher & language|ගුරු තොරතුරු සහ භාෂාව|ஆசிரியரும் மொழியும்
Question language|ප්‍රශ්නවල භාෂාව|வினாக்களின் மொழி
Teacher profile|ගුරු පැතිකඩ|ஆசிரியர் விவரம்
No profile|පැතිකඩක් නැත|விவரம் இல்லை
Apply details|විස්තර යොදන්න|விவரங்களைப் பயன்படுத்து
Questions|ප්‍රශ්න|வினாக்கள்
Choose from the bank or write your own.|බැංකුවෙන් තෝරන්න හෝ ඔබේ ප්‍රශ්න ලියන්න.|வங்கியிலிருந்து தேர்ந்தெடுக்கவும் அல்லது உங்கள் வினாக்களை எழுதவும்.
Choose questions|ප්‍රශ්න තෝරන්න|வினாக்களைத் தேர்ந்தெடு
Write a question|ප්‍රශ්නයක් ලියන්න|வினா எழுது
Pick questions for me|ප්‍රශ්න ස්වයංක්‍රීයව තෝරන්න|தானாக வினாக்களைத் தேர்வு செய்
Question type|ප්‍රශ්න වර්ගය|வினா வகை
How many?|ප්‍රශ්න කීයක්ද?|எத்தனை வினாக்கள்?
Add random questions|අහඹු ප්‍රශ්න එක් කරන්න|சீரற்ற வினாக்களைச் சேர்
Add teaching content|ඉගැන්වීමේ අන්තර්ගතය එක් කරන්න|கற்பித்தல் உள்ளடக்கத்தைச் சேர்
Lesson note|පාඩම් සටහන|பாடக் குறிப்பு
Worked example|විසඳූ උදාහරණය|தீர்க்கப்பட்ட உதாரணம்
Table / comparison|වගුව / සැසඳීම|அட்டவணை / ஒப்பீடு
Diagram / mind map|රූපය / සංකල්ප සිතියම|வரைபடம் / மனவரைபடம்
Practical activity|ප්‍රායෝගික ක්‍රියාකාරකම|செய்முறைச் செயற்பாடு
Heading / instructions|ශීර්ෂය / උපදෙස්|தலைப்பு / அறிவுறுத்தல்கள்
Unicode equations and chemical formulas can be entered in any text field. Upload diagrams as PNG, JPEG or WebP.|සමීකරණ සහ රසායනික සූත්‍ර යුනිකෝඩ් අකුරින් ලියන්න. රූප PNG, JPEG හෝ WebP ලෙස එක් කරන්න.|சமன்பாடுகளையும் இரசாயனச் சூத்திரங்களையும் யூனிகோடில் உள்ளிடலாம். படங்களை PNG, JPEG அல்லது WebP ஆகப் பதிவேற்றுங்கள்.
Page appearance|පිටුවේ පෙනුම|பக்கத் தோற்றம்
Classic examination|සාම්ප්‍රදායික විභාග පත්‍රය|வழமையான தேர்வு வடிவம்
Modern academy|නවීන පන්ති ආකෘතිය|நவீன வகுப்பு வடிவம்
Compact revision|ඉඩ ඉතිරි කරන පුනරීක්ෂණය|சுருக்கமான மீட்டல் வடிவம்
Structured workbook|කොටු සහිත වැඩපොත|கட்டமைக்கப்பட்ட பயிற்சிப்புத்தகம்
Options per row|පේළියක පිළිතුරු විකල්ප ගණන|வரிசைக்கான விடைத் தெரிவுகள்
Writing lines|ලිවීමට පේළි|எழுதும் வரிகள்
Default answer space|සාමාන්‍ය පිළිතුරු ඉඩ|இயல்புநிலை விடை இடம்
Question spacing|ප්‍රශ්න අතර ඉඩ|வினாக்களுக்கிடையிலான இடைவெளி
Show on page|පිටුවේ පෙන්වන්න|பக்கத்தில் காட்டு
Undo|අහෝසි කරන්න|செயல்தவிர்
Redo|නැවත කරන්න|மீண்டும் செய்
Save|සුරකින්න|சேமி
Print / PDF|මුද්‍රණය / PDF|அச்சிடு / PDF
Word|Word ලේඛනය|Word ஆவணம்
Tap Edit beside a question to change its wording, options, answer or marks.|ප්‍රශ්නය අසල සංස්කරණය ඔබා ප්‍රශ්නය, විකල්ප, පිළිතුර හෝ ලකුණු වෙනස් කරන්න.|வினாவருகே திருத்து என்பதைத் தேர்ந்து வினா, தெரிவுகள், விடை அல்லது புள்ளிகளை மாற்றுங்கள்.
Your paper starts here|ඔබේ පත්‍රය මෙතැනින් අරඹන්න|உங்கள் வினாத்தாள் இங்கே தொடங்குகிறது
Choose your first questions to see them on the page.|පිටුවේ දැකීමට මුල් ප්‍රශ්න තෝරන්න.|பக்கத்தில் காண முதல் வினாக்களைத் தேர்ந்தெடுங்கள்.
48 illustrative English sample questions included. Import your own Sinhala banks in Question Banks.|ඉංග්‍රීසි ආදර්ශ ප්‍රශ්න 48ක් ඇත. ඔබේ සිංහල ප්‍රශ්න බැංකු ප්‍රශ්න බැංකු කොටසින් ඇතුළත් කරන්න.|48 ஆங்கில மாதிரி வினாக்கள் உள்ளன. உங்கள் தமிழ் வினா வங்கிகளை வினா வங்கிகள் பகுதியில் இறக்குமதி செய்யுங்கள்.
Add more questions|තවත් ප්‍රශ්න එක් කරන්න|மேலும் வினாக்களைச் சேர்
MCQ answer grid|බහුවරණ පිළිතුරු කොටුව|பல்தேர்வு விடைக் கட்டம்
Paper backup|පත්‍රයේ උපස්ථ පිටපත|வினாத்தாள் காப்புப்பிரதி
PDF uses your browser print dialog. Word includes editable text, tables and embedded diagrams; complex layout may differ. Check before distribution.|PDF සඳහා බ්‍රවුසරයේ මුද්‍රණ කවුළුව භාවිත වේ. Word තුළ පෙළ, වගු සහ රූප ඇත; සංකීර්ණ සැකසුම් වෙනස් විය හැක. බෙදාහැරීමට පෙර පරීක්ෂා කරන්න.|PDF உருவாக்க உலாவியின் அச்சிடும் சாளரம் பயன்படும். Word இல் திருத்தக்கூடிய உரை, அட்டவணைகள், படங்கள் உள்ளன; சிக்கலான அமைப்பு மாறலாம். பகிர்வதற்கு முன் சரிபார்க்கவும்.
Edit|සංස්කරණය|திருத்து
Replace|වෙනත් ප්‍රශ්නයක්|மாற்று வினா
Remove|ඉවත් කරන්න|அகற்று
Open|විවෘත කරන්න|திற
Duplicate|පිටපතක් සාදන්න|நகலாக்கு
Delete|මකන්න|நீக்கு
Done|අවසන්|முடிந்தது
Search questions|ප්‍රශ්න සොයන්න|வினாக்களைத் தேடு
Search questions…|ප්‍රශ්න සොයන්න…|வினாக்களைத் தேடு…
Lesson|පාඩම|பாடப்பகுதி
Type|වර්ගය|வகை
Find questions|ප්‍රශ්න සොයන්න|வினாக்களைத் தேடு
Options & answer|විකල්ප සහ පිළිතුර|தெரிவுகளும் விடையும்
Add to paper|පත්‍රයට එක් කරන්න|வினாத்தாளில் சேர்
Added|එක් කර ඇත|சேர்க்கப்பட்டது
No matching questions. The sample banks are English. Change your paper language or import a matching bank.|ගැළපෙන ප්‍රශ්න නැත. ආදර්ශ බැංකු ඉංග්‍රීසි භාෂාවෙනි. ප්‍රශ්න භාෂාව වෙනස් කරන්න හෝ ගැළපෙන බැංකුවක් ඇතුළත් කරන්න.|பொருந்தும் வினாக்கள் இல்லை. மாதிரி வங்கிகள் ஆங்கிலத்தில் உள்ளன. வினா மொழியை மாற்றவும் அல்லது பொருந்தும் வங்கியை இறக்குமதி செய்யவும்.
Edit question|ප්‍රශ්නය සංස්කරණය කරන්න|வினாவைத் திருத்து
Add subquestions below the question they belong to. Each part keeps its own answer and marks.|අදාළ ප්‍රශ්නය යටතේ උපප්‍රශ්න එක් කරන්න. සෑම කොටසකටම වෙනම පිළිතුර සහ ලකුණු තැබිය හැක.|உரிய வினாவின் கீழ் துணைவினாக்களைச் சேர்க்கவும். ஒவ்வொரு பகுதிக்கும் தனி விடையும் புள்ளிகளும் இருக்கும்.
Paper section|පත්‍රයේ කොටස|வினாத்தாள் பகுதி
Main question|ප්‍රධාන ප්‍රශ්නය|முதன்மை வினா
Parent marks (children determine total)|ප්‍රධාන ලකුණු (උපප්‍රශ්න අනුව එකතුව ගණනය වේ)|முதன்மைப் புள்ளிகள் (துணைவினாக்களிலிருந்து மொத்தம் கணிக்கப்படும்)
Marks|ලකුණු|புள்ளிகள்
Question wording|ප්‍රශ්නයේ පෙළ|வினா உரை
Answer / marking points|පිළිතුර / ලකුණු දීමේ කරුණු|விடை / புள்ளியிடல் குறிப்புகள்
Answer options — one per line|පිළිතුරු විකල්ප — පේළියකට එක බැගින්|விடைத் தெரிவுகள் — வரிக்கு ஒன்று
Correct option numbers (e.g. 2 or 2,3)|නිවැරදි විකල්ප අංක (උදා: 2 හෝ 2,3)|சரியான தெரிவு எண்கள் (எ.கா. 2 அல்லது 2,3)
Diagram, table & answer space|රූප, වගු සහ පිළිතුරු ඉඩ|படம், அட்டவணை மற்றும் விடை இடம்
Explanation|පැහැදිලි කිරීම|விளக்கம்
Answer space|පිළිතුරු ඉඩ|விடை இடம்
Writing lines / space size|ලිවීමේ පේළි / ඉඩ ප්‍රමාණය|எழுதும் வரிகள் / இட அளவு
Use section setting|කොටසේ සැකසුම යොදන්න|பகுதியின் அமைப்பைப் பயன்படுத்து
Use paper setting|පත්‍රයේ සැකසුම යොදන්න|தாளின் அமைப்பைப் பயன்படுத்து
Separate answer sheet / none|වෙනම පිළිතුරු පත්‍රයක් / ඉඩ නැත|தனி விடைத்தாள் / இடமில்லை
Dotted writing lines|තිත් සහිත ලිවීමේ පේළි|புள்ளியிட்ட எழுதும் வரிகள்
Blank drawing space|රූප ඇඳීමට හිස් ඉඩ|வரைதலுக்கான வெற்று இடம்
Graph grid|ප්‍රස්තාර කොටු|வரைபடக் கட்டம்
One|එකක්|ஒன்று
Two|දෙකක්|இரண்டு
Four|හතරක්|நான்கு
Diagram position|රූපයේ පිහිටීම|படத்தின் அமைவிடம்
Diagram width (pixels)|රූපයේ පළල (පික්සල්)|பட அகலம் (பிக்சல்கள்)
Add / replace diagrams|රූප එක් කරන්න / වෙනස් කරන්න|படங்களைச் சேர் / மாற்று
Remove diagram|රූපය ඉවත් කරන්න|படத்தை அகற்று
Table (tab-separated columns; one row per line)|වගුව (Tab යතුරෙන් තීරු වෙන් කරන්න; පේළියකට එක් පේළියක්)|அட்டவணை (Tab மூலம் நெடுவரிசைகளைப் பிரிக்கவும்; வரிக்கு ஒரு நிரை)
Add subquestion|උපප්‍රශ්නයක් එක් කරන්න|துணைவினா சேர்
Remove this subquestion|මෙම උපප්‍රශ්නය ඉවත් කරන්න|இந்தத் துணைவினாவை அகற்று
Source & page break|මූලාශ්‍රය සහ නව පිටුව|மூலமும் பக்கப் பிரிப்பும்
Source examination|මූලාශ්‍ර විභාගය|மூலத் தேர்வு
Source year|මූලාශ්‍ර වර්ෂය|மூல ஆண்டு
Original paper|මුල් ප්‍රශ්න පත්‍රය|மூல வினாத்தாள்
Original question number|මුල් ප්‍රශ්න අංකය|மூல வினா எண்
School / publisher|පාසල / ප්‍රකාශකයා|பாடசாலை / வெளியீட்டாளர்
Preserve original printed number|මුල් මුද්‍රිත අංකය තබන්න|மூல அச்சு எண்ணைத் தக்கவை
Start on a new page|නව පිටුවකින් අරඹන්න|புதிய பக்கத்தில் தொடங்கு
Save question|ප්‍රශ්නය සුරකින්න|வினாவைச் சேமி
Cancel|අවලංගු කරන්න|ரத்து செய்
Teaching content|ඉගැන්වීමේ අන්තර්ගතය|கற்பித்தல் உள்ளடக்கம்
Section|කොටස|பகுதி
Heading|ශීර්ෂය|தலைப்பு
Aim, apparatus, method, safety and observations|අරමුණ, උපකරණ, ක්‍රමය, ආරක්ෂාව සහ නිරීක්ෂණ|நோக்கம், உபகரணங்கள், முறை, பாதுகாப்பு மற்றும் அவதானிப்புகள்
Content / explanation|අන්තර්ගතය / පැහැදිලි කිරීම|உள்ளடக்கம் / விளக்கம்
Worked solution|විසඳුම සහ පියවර|படிப்படியான தீர்வு
Add diagrams / mind map (PNG, JPEG, WebP)|රූප / සංකල්ප සිතියම් එක් කරන්න (PNG, JPEG, WebP)|படங்கள் / மனவரைபடம் சேர் (PNG, JPEG, WebP)
Caption|රූප විස්තරය|பட விளக்கம்
Width|පළල|அகலம்
Row|පේළිය|நிரை
Column|තීරුව|நெடுவரிசை
Save content|අන්තර්ගතය සුරකින්න|உள்ளடக்கத்தைச் சேமி
Each section can be compulsory or allow a choice. A section can also hold notes and activities.|කොටසක් අනිවාර්ය හෝ තෝරා පිළිතුරු දෙන කොටසක් කළ හැක. සටහන් සහ ක්‍රියාකාරකම් ද එක් කළ හැක.|ஒவ்வொரு பகுதியையும் கட்டாயமாகவோ தேர்வுக்குரியதாகவோ அமைக்கலாம். குறிப்புகளையும் செயற்பாடுகளையும் சேர்க்கலாம்.
Document instructions|ලේඛනයේ උපදෙස්|ஆவண அறிவுறுத்தல்கள்
Paper code|පත්‍ර කේතය|வினாத்தாள் குறியீடு
Year|වර්ෂය|ஆண்டு
Term|වාරය|தவணை
Section name|කොටසේ නම|பகுதியின் பெயர்
Instructions|උපදෙස්|அறிவுறுத்தல்கள்
Answer rule|පිළිතුරු දීමේ නියමය|விடையளிக்கும் விதி
All questions compulsory|සියලු ප්‍රශ්න අනිවාර්යයි|அனைத்து வினாக்களும் கட்டாயம்
Choose a number of questions|ප්‍රශ්න ගණනක් තෝරා පිළිතුරු දෙන්න|குறிப்பிட்ட எண்ணிக்கையிலான வினாக்களைத் தேர்ந்தெடு
How many to answer?|පිළිතුරු දිය යුතු ගණන|விடையளிக்க வேண்டிய எண்ணிக்கை
Time (minutes; 0 = hidden)|කාලය (මිනිත්තු; 0 = නොපෙන්වන්න)|நேரம் (நிமிடங்கள்; 0 = மறை)
Expected questions (0 = flexible)|අපේක්ෂිත ප්‍රශ්න ගණන (0 = සීමාවක් නැත)|எதிர்பார்க்கும் வினாக்கள் (0 = வரம்பில்லை)
Starting question number (0 = continue)|මුල් ප්‍රශ්න අංකය (0 = පෙර අංකයෙන් ඉදිරියට)|தொடக்க வினா எண் (0 = தொடர்ச்சி)
Start section on a new page|කොටස නව පිටුවකින් අරඹන්න|பகுதியைப் புதிய பக்கத்தில் தொடங்கு
Add section|කොටසක් එක් කරන්න|பகுதி சேர்
Save sections|කොටස් සුරකින්න|பகுதிகளைச் சேமி
Import an offline question bank|ප්‍රශ්න බැංකු ගොනුවක් ඇතුළත් කරන්න|வினா வங்கிக் கோப்பை இறக்குமதி செய்
Bring your subject knowledge into the workspace. Files stay on this device.|විෂය ප්‍රශ්න මෙම වැඩබිමට ඇතුළත් කරන්න. ගොනු මෙම උපාංගයේම සුරැකේ.|உங்கள் பாட வினாக்களைப் பணிப்பகுதியில் சேருங்கள். கோப்புகள் இந்தச் சாதனத்திலேயே இருக்கும்.
JSON / .qbank · versioned updates · up to 20,000 questions|JSON / .qbank · අනුවාද යාවත්කාලීන · ප්‍රශ්න 20,000 දක්වා|JSON / .qbank · பதிப்பு புதுப்பிப்புகள் · 20,000 வினாக்கள் வரை
Validate & import|පරීක්ෂා කර ඇතුළත් කරන්න|சரிபார்த்து இறக்குமதி செய்
Load demonstration banks|ආදර්ශ ප්‍රශ්න බැංකු එක් කරන්න|மாதிரி வினா வங்கிகளைச் சேர்
Download sample bank|ආදර්ශ බැංකුව බාගන්න|மாதிரி வங்கியைப் பதிவிறக்கு
Remove bank|බැංකුව ඉවත් කරන්න|வங்கியை அகற்று
Your question library|ඔබේ ප්‍රශ්න එකතුව|உங்கள் வினா நூலகம்
Find the right question. Originals stay intact when you edit a paper.|අවශ්‍ය ප්‍රශ්නය සොයන්න. පත්‍රය සංස්කරණය කළත් මුල් ප්‍රශ්න වෙනස් නොවේ.|பொருத்தமான வினாவைக் கண்டறியுங்கள். தாளைத் திருத்தினாலும் மூல வினாக்கள் மாறாது.
Search wording, answers and tags|ප්‍රශ්න, පිළිතුරු සහ ටැග් සොයන්න|வினாக்கள், விடைகள், குறிச்சொற்களைத் தேடு
Search|සොයන්න|தேடு
Add personal question|ඔබේ ප්‍රශ්නයක් එක් කරන්න|சொந்த வினாவைச் சேர்
View options and answer|විකල්ප සහ පිළිතුර බලන්න|தெரிவுகளையும் விடையையும் பார்
Add to current paper|විවෘත පත්‍රයට එක් කරන්න|தற்போதைய தாளில் சேர்
New profile|නව ගුරු පැතිකඩක්|புதிய ஆசிரியர் விவரம்
Edit profile|පැතිකඩ සංස්කරණය|விவரத்தைத் திருத்து
Create reusable teacher and institute details for your papers.|පත්‍ර සඳහා නැවත භාවිත කළ හැකි ගුරු සහ ආයතන විස්තර සකසන්න.|மீண்டும் பயன்படுத்தக்கூடிய ஆசிரியர் மற்றும் நிறுவன விவரங்களை அமைக்கவும்.
Save profile|පැතිකඩ සුරකින්න|விவரத்தைச் சேமி
Institute logo|ආයතන ලාංඡනය|நிறுவன இலச்சினை
Teacher name|ගුරුවරයාගේ නම|ஆசிரியர் பெயர்
Qualifications|සුදුසුකම්|தகைமைகள்
Institute / class name|ආයතනයේ / පන්තියේ නම|நிறுவன / வகுப்புப் பெயர்
Class locations|පන්ති පැවැත්වෙන ස්ථාන|வகுப்பு நடைபெறும் இடங்கள்
Phone|දුරකථන අංකය|தொலைபேசி
WhatsApp|WhatsApp අංකය|WhatsApp இலக்கம்
Social links|සමාජ මාධ්‍ය සබැඳි|சமூக ஊடக இணைப்புகள்
Website|වෙබ් අඩවිය|இணையத்தளம்
Default instructions|සාමාන්‍ය උපදෙස්|இயல்புநிலை அறிவுறுத்தல்கள்
Footer text|පාදක සටහන|அடிக்குறிப்பு
Backup & restore|උපස්ථ සහ ප්‍රතිස්ථාපනය|காப்புப்பிரதி மற்றும் மீட்டமைப்பு
A portable backup includes banks, questions, papers, profiles, images and settings.|උපස්ථ පිටපතට බැංකු, ප්‍රශ්න, පත්‍ර, පැතිකඩ, රූප සහ සැකසුම් ඇතුළත් වේ.|காப்புப்பிரதியில் வங்கிகள், வினாக்கள், தாள்கள், விவரங்கள், படங்கள், அமைப்புகள் உள்ளடங்கும்.
Download complete backup|සම්පූර්ණ උපස්ථය බාගන්න|முழுக் காப்புப்பிரதியைப் பதிவிறக்கு
Restore a backup|උපස්ථයක් නැවත යොදන්න|காப்புப்பிரதியை மீட்டமை
Restoration replaces this workspace in one transaction. Download a backup first.|ප්‍රතිස්ථාපනයෙන් මෙම වැඩබිමේ දත්ත වෙනස් වේ. පළමුව උපස්ථයක් බාගන්න.|மீட்டமைப்பு தற்போதைய பணிப்பகுதியை மாற்றும். முதலில் காப்புப்பிரதியைப் பதிவிறக்கவும்.
Validate & restore|පරීක්ෂා කර ප්‍රතිස්ථාපනය කරන්න|சரிபார்த்து மீட்டமை
Manage your device workspace.|උපාංගයේ වැඩබිම කළමනාකරණය කරන්න.|சாதனத்தின் பணிப்பகுதியை நிர்வகிக்கவும்.
Appearance|පෙනුම|தோற்றம்
Navigation language|යෙදුමේ භාෂාව|செயலியின் மொழி
Save settings|සැකසුම් සුරකින්න|அமைப்புகளைச் சேமி
Device storage|උපාංගයේ ගබඩාව|சாதனச் சேமிப்பகம்
Checking available storage…|ගබඩා ඉඩ පරීක්ෂා කරමින්…|சேமிப்பிடத்தைச் சரிபார்க்கிறது…
Request persistent storage|ස්ථිර ගබඩා අවසරය ඉල්ලන්න|நிலையான சேமிப்பிட அனுமதி கோரு
Browser data can be removed by device cleanup. Keep regular portable backups.|උපාංගය පිරිසිදු කිරීමේදී බ්‍රවුසර දත්ත මැකිය හැක. නිතර උපස්ථ තබාගන්න.|சாதனத்தைச் சுத்தப்படுத்தும்போது உலாவித் தரவு நீங்கலாம். தொடர்ந்து காப்புப்பிரதி எடுக்கவும்.
Settings & content|සැකසුම් සහ අන්තර්ගතය|அமைப்புகளும் உள்ளடக்கமும்
Go to paper preview ↓|පත්‍ර පෙරදසුනට යන්න ↓|வினாத்தாள் முன்னோட்டத்திற்குச் செல் ↓
Headers, footers & borders|ශීර්ෂ, පාදක සටහන් සහ මායිම්|தலைப்புகள், அடிக்குறிப்புகள் மற்றும் எல்லைகள்
Page border|පිටු මායිම|பக்க எல்லை
No border|මායිමක් නැත|எல்லை இல்லை
Single line|තනි රේඛාව|ஒற்றைக் கோடு
Double line|ද්විත්ව රේඛාව|இரட்டைக் கோடு
Dashed line|කඩ ඉරි|துண்டுக் கோடு
Accent frame|විශේෂ රාමුව|சிறப்பு எல்லை
Border color|මායිමේ වර්ණය|எல்லை நிறம்
Border thickness|මායිමේ ඝනකම|எல்லைத் தடிமன்
Header alignment|ශීර්ෂයේ පෙළගැස්ම|தலைப்பின் சீரமைப்பு
Header message|ශීර්ෂ සටහන|தலைப்புச் செய்தி
Header on following pages|ඊළඟ පිටුවල ශීර්ෂය|அடுத்த பக்கங்களின் தலைப்பு
Footer message|පාදක සටහන|அடிக்குறிப்புச் செய்தி
Show teacher information|ගුරු තොරතුරු පෙන්වන්න|ஆசிரியர் விவரங்களைக் காட்டு
Show phone and class locations|දුරකථන සහ පන්ති ස්ථාන පෙන්වන්න|தொலைபேசி மற்றும் வகுப்பிடங்களைக் காட்டு
Show institute logo|ආයතන ලාංඡනය පෙන්වන්න|நிறுவன இலச்சினையைக் காட்டு
Show page numbers|පිටු අංක පෙන්වන්න|பக்க எண்களைக் காட்டு
Page-number language|පිටු අංකයේ භාෂාව|பக்க எண்ணின் மொழி
Same as app|යෙදුමේ භාෂාවම|செயலியின் மொழியே
Digits|ඉලක්කම්|இலக்கங்கள்
Local digits|දේශීය ඉලක්කම්|உள்ளூர் இலக்கங்கள்
Page-number position|පිටු අංකයේ පිහිටීම|பக்க எண்ணின் அமைவிடம்
Page-number style|පිටු අංක ආකාරය|பக்க எண் வடிவம்
Page 1 of 5|පිටුව 1 / 5|பக்கம் 1 / 5
Start numbering at|අංකනය අරඹන අංකය|எண்ணிடல் தொடங்கும் எண்
Teacher details come from the selected teacher profile. Your custom messages stay in the language you write them.|තෝරාගත් පැතිකඩෙන් ගුරු තොරතුරු ගනී. ඔබ ලියන සටහන් එම භාෂාවෙන්ම පවතී.|தேர்ந்தெடுத்த விவரத்திலிருந்து ஆசிரியர் தகவல் பெறப்படும். உங்கள் சொந்தச் செய்திகள் எழுதிய மொழியிலேயே இருக்கும்.
Apply page design|පිටු සැකසුම යොදන්න|பக்க வடிவமைப்பைப் பயன்படுத்து
Copy all text|සියලු පෙළ පිටපත් කරන්න|அனைத்து உரையையும் நகலெடு
Copy text|පෙළ පිටපත් කරන්න|உரையை நகலெடு
Download text|පෙළ ගොනුව බාගන්න|உரைக் கோப்பைப் பதிவிறக்கு
Paper text|පත්‍රයේ පෙළ|வினாத்தாள் உரை
Select all|සියල්ල තෝරන්න|அனைத்தையும் தேர்ந்தெடு
Copy questions only|ප්‍රශ්න පමණක් පිටපත් කරන්න|வினாக்களை மட்டும் நகலெடு
Copy with marking scheme|ලකුණු පටිපාටිය සමඟ පිටපත් කරන්න|புள்ளியிடல் திட்டத்துடன் நகலெடு
Google Form|Google Form සාදන්න|Google Form உருவாக்கு
Create Google Form|Google Form සාදන්න|Google Form உருவாக்கு
Google Form export|Google Form අපනයනය|Google Form ஏற்றுமதி
Copy Google script|Google ස්ක්‍රිප්ට් පිටපත් කරන්න|Google நிரலை நகலெடு
Download Google script|Google ස්ක්‍රිප්ට් බාගන්න|Google நிரலைப் பதிவிறக்கு
Open Google Apps Script|Google Apps Script විවෘත කරන්න|Google Apps Script திற
Google Forms require internet and your Google account. The paper editor continues to work offline.|Google Forms සඳහා අන්තර්ජාලය සහ ඔබේ Google ගිණුම අවශ්‍යයි. පත්‍ර සංස්කාරකය අන්තර්ජාලය නැතිවත් ක්‍රියා කරයි.|Google Forms க்கு இணையமும் உங்கள் Google கணக்கும் தேவை. வினாத்தாள் தொகுப்பான் இணையமின்றியும் இயங்கும்.
Copy the generated script, open a new Apps Script project, replace its starter code, and run createPaperForm. Google will ask you to authorize access to your Forms.|සකස් කළ ස්ක්‍රිප්ට් පිටපත් කර නව Apps Script ව්‍යාපෘතියකට යොදන්න. මුල් කේතය වෙනුවට එය දමා createPaperForm ධාවනය කරන්න. ඔබේ Forms භාවිතයට Google අවසර ඉල්ලනු ඇත.|உருவாக்கிய நிரலை நகலெடுத்து புதிய Apps Script திட்டத்தில் தொடக்க நிரலுக்குப் பதிலாக இடுங்கள். createPaperForm ஐ இயக்குங்கள். உங்கள் Forms ஐ அணுக Google அனுமதி கோரும்.
The form is created unpublished. Its edit link appears in the execution log. Review it before publishing.|Form එක ප්‍රකාශයට පත් නොකර සාදයි. සංස්කරණ සබැඳිය execution log තුළ ලැබේ. ප්‍රකාශයට පෙර පරීක්ෂා කරන්න.|Form வெளியிடப்படாமல் உருவாகும். திருத்தும் இணைப்பு execution log இல் தோன்றும். வெளியிடுவதற்கு முன் பரிசீலிக்கவும்.
Written answers need manual grading. Optional-question rules and multiple accepted MCQ alternatives need review in Google Forms.|ලිඛිත පිළිතුරු අතින් ලකුණු කළ යුතුය. තෝරා පිළිතුරු දීමේ නියම සහ බහුවරණ පිළිගත හැකි විකල්ප Google Forms තුළ පරීක්ෂා කරන්න.|எழுத்து விடைகளுக்கு கைமுறை மதிப்பீடு தேவை. விருப்ப வினா விதிகளையும் ஒன்றுக்கு மேற்பட்ட ஏற்கத்தக்க தெரிவுகளையும் Google Forms இல் பரிசீலிக்கவும்.
Do not share the generated script with students; it contains teacher answer data.|සකස් කළ ස්ක්‍රිප්ට් සිසුන් සමඟ බෙදා නොගන්න; එහි ගුරු පිළිතුරු දත්ත ඇත.|உருவாக்கிய நிரலில் ஆசிரியருக்கான விடைத் தரவு உள்ளது; மாணவர்களுடன் பகிர வேண்டாம்.
Copied to clipboard|පසුරු පුවරුවට පිටපත් විය|நகலெடுக்கப்பட்டது
Select the text and copy it using your device controls.|පෙළ තෝරා ඔබේ උපාංගයේ පිටපත් කිරීම භාවිත කරන්න.|உரையைத் தேர்ந்து சாதனத்தின் நகலெடுக்கும் வசதியைப் பயன்படுத்துங்கள்.
App labels change language. Your own questions and notes keep their original wording unless a bank supplies translations.|යෙදුමේ ලේබල භාෂාව වෙනස් වේ. බැංකුවක පරිවර්තන නොමැති නම් ඔබේ ප්‍රශ්න සහ සටහන් මුල් භාෂාවෙන්ම පවතී.|செயலியின் மொழி மாறும். வங்கியில் மொழிபெயர்ப்பு இல்லாவிட்டால் உங்கள் வினாக்களும் குறிப்புகளும் மூல மொழியிலேயே இருக்கும்.
Draft saved|කෙටුම්පත සුරැකිණි|வரைவு சேமிக்கப்பட்டது
Question added to your paper|ප්‍රශ්නය පත්‍රයට එක් විය|வினா தாளில் சேர்க்கப்பட்டது
Paper updated|පත්‍රය යාවත්කාලීන විය|வினாத்தாள் புதுப்பிக்கப்பட்டது
Independent copy saved|වෙනම පිටපතක් සුරැකිණි|தனி நகல் சேமிக்கப்பட்டது
Backup restored successfully|උපස්ථය සාර්ථකව යෙදිණි|காப்புப்பிரதி மீட்டமைக்கப்பட்டது
Illustrative demonstration banks imported|ආදර්ශ ප්‍රශ්න බැංකු ඇතුළත් විය|மாதிரி வினா வங்கிகள் இறக்குமதி செய்யப்பட்டன
Select a question-bank file|ප්‍රශ්න බැංකු ගොනුව තෝරන්න|வினா வங்கிக் கோப்பைத் தேர்ந்தெடு
Select a backup file|උපස්ථ ගොනුව තෝරන්න|காப்புப்பிரதிக் கோப்பைத் தேர்ந்தெடு
File limit is 40 MB|ගොනුවේ උපරිම ප්‍රමාණය 40 MB යි|கோப்பின் அதிகபட்ச அளவு 40 MB
Add questions before exporting|අපනයනයට පෙර ප්‍රශ්න එක් කරන්න|ஏற்றுமதிக்கு முன் வினாக்களைச் சேர்க்கவும்
Add MCQs first|පළමුව බහුවරණ ප්‍රශ්න එක් කරන්න|முதலில் பல்தேர்வு வினாக்களைச் சேர்க்கவும்
No MCQs in this document|මෙම ලේඛනයේ බහුවරණ ප්‍රශ්න නැත|இந்த ஆவணத்தில் பல்தேர்வு வினாக்கள் இல்லை
Start or open a paper first|පළමුව පත්‍රයක් අරඹන්න හෝ විවෘත කරන්න|முதலில் ஒரு வினாத்தாளைத் தொடங்கவும் அல்லது திறக்கவும்
Question already in paper|මෙම ප්‍රශ්නය දැනටමත් පත්‍රයේ ඇත|இந்த வினா ஏற்கனவே தாளில் உள்ளது
Enter wording for every question and subquestion|සෑම ප්‍රශ්නයකම සහ උපප්‍රශ්නයකම පෙළ ලියන්න|ஒவ்வொரு வினாவிற்கும் துணைவினாவிற்கும் உரையை உள்ளிடவும்
Check MCQ options and answer numbers|බහුවරණ විකල්ප සහ පිළිතුරු අංක පරීක්ෂා කරන්න|பல்தேர்வுத் தெரிவுகளையும் விடை எண்களையும் சரிபார்க்கவும்
Add some content|අන්තර්ගතයක් එක් කරන්න|உள்ளடக்கத்தைச் சேர்க்கவும்
Use PNG, JPEG or WebP under 2 MB|2 MB ට අඩු PNG, JPEG හෝ WebP රූපයක් යොදන්න|2 MB க்குக் குறைவான PNG, JPEG அல்லது WebP படத்தைப் பயன்படுத்தவும்
Name each section and enter a positive choice count|සෑම කොටසකටම නමක් දී වලංගු තේරීම් ගණනක් යොදන්න|ஒவ்வொரு பகுதிக்கும் பெயரிட்டு சரியான தேர்வு எண்ணிக்கையை உள்ளிடவும்
Enter a paper title and valid time|පත්‍ර මාතෘකාව සහ වලංගු කාලයක් යොදන්න|வினாத்தாள் தலைப்பையும் சரியான நேரத்தையும் உள்ளிடவும்
Teacher name is required|ගුරුවරයාගේ නම අවශ්‍යයි|ஆசிரியர் பெயர் தேவை
Choose a PNG/JPEG/WebP under 2 MB|2 MB ට අඩු PNG/JPEG/WebP රූපයක් තෝරන්න|2 MB க்குக் குறைவான PNG/JPEG/WebP படத்தைத் தேர்ந்தெடுக்கவும்
Delete this paper?|මෙම පත්‍රය මකන්නද?|இந்த வினாத்தாளை நீக்கவா?
Remove bank questions? Saved papers remain available.|බැංකුවේ ප්‍රශ්න ඉවත් කරන්නද? සුරැකි පත්‍ර පවතී.|வங்கியின் வினாக்களை அகற்றவா? சேமித்த தாள்கள் இருக்கும்.
Replace all local workspace data with this backup?|මෙම උපස්ථයෙන් වැඩබිමේ සියලු දත්ත ප්‍රතිස්ථාපනය කරන්නද?|இந்தக் காப்புப்பிரதியால் பணிப்பகுதியின் அனைத்துத் தரவையும் மாற்றவா?
Change format and move existing content into its first section? You can reassign content in Edit.|ආකෘතිය වෙනස් කර දැනට ඇති අන්තර්ගතය මුල් කොටසට ගෙන යන්නද? සංස්කරණයේදී කොටස වෙනස් කළ හැක.|வடிவத்தை மாற்றி உள்ளடக்கத்தை முதல் பகுதிக்கு நகர்த்தவா? திருத்தத்தில் பகுதியை மாற்றலாம்.
Print this draft anyway?|එසේ වුවත් මෙම කෙටුම්පත මුද්‍රණය කරන්නද?|இருப்பினும் இந்த வரைவை அச்சிடவா?
Persistent storage granted|ස්ථිර ගබඩා අවසරය ලැබිණි|நிலையான சேமிப்பிட அனுமதி வழங்கப்பட்டது
Browser did not grant persistent storage. Keep backups.|බ්‍රවුසරයෙන් ස්ථිර ගබඩා අවසරය නොලැබිණි. උපස්ථ තබාගන්න.|உலாவி நிலையான சேமிப்பிட அனுமதி வழங்கவில்லை. காப்புப்பிரதி வைத்திருங்கள்.
No alternate question in the same grade, subject, lesson and type|එම ශ්‍රේණිය, විෂය, පාඩම සහ වර්ගයට වෙනත් ප්‍රශ්නයක් නැත|அதே தரம், பாடம், பாடப்பகுதி, வகையில் மாற்று வினா இல்லை
Close other Studio tabs to upgrade storage|ගබඩාව යාවත්කාලීන කිරීමට අනෙක් පත්‍ර වැඩබිම් ටැබ් වසන්න|சேமிப்பகத்தைப் புதுப்பிக்க மற்ற பணிப்பகுதி தாவல்களை மூடவும்
This bank version is already installed|මෙම බැංකු අනුවාදය දැනටමත් ඇතුළත් කර ඇත|இந்த வங்கிப் பதிப்பு ஏற்கனவே உள்ளது
Unknown format|හඳුනා නොගත් ආකෘතියකි|அறியப்படாத வடிவம்
Unsupported bank format|සහාය නොදක්වන බැංකු ආකෘතියකි|ஆதரிக்கப்படாத வங்கி வடிவம்
Invalid bank metadata|බැංකු විස්තර වලංගු නැත|வங்கி விவரங்கள் செல்லுபடியற்றவை
Maximum 20,000 questions per bank|බැංකුවකට උපරිම ප්‍රශ්න 20,000 යි|வங்கிக்கு அதிகபட்சம் 20,000 வினாக்கள்
Only embedded PNG/JPEG/WebP images are supported|ඇතුළත් කළ PNG/JPEG/WebP රූප සඳහා පමණක් සහාය ඇත|உள்ளடக்கப்பட்ட PNG/JPEG/WebP படங்கள் மட்டுமே ஆதரிக்கப்படுகின்றன
Unsupported backup|සහාය නොදක්වන උපස්ථ ආකෘතියකි|ஆதரிக்கப்படாத காப்புப்பிரதி
Invalid paper|පත්‍රය වලංගු නැත|செல்லுபடியற்ற வினாத்தாள்
Invalid question type|ප්‍රශ්න වර්ගය වලංගු නැත|செல்லுபடியற்ற வினா வகை
Invalid MCQ answer data|බහුවරණ පිළිතුරු දත්ත වලංගු නැත|செல்லுபடியற்ற பல்தேர்வு விடைத் தரவு
Invalid marks|ලකුණු වලංගු නැත|செல்லுபடியற்ற புள்ளிகள்
Invalid table|වගුව වලංගු නැත|செல்லுபடியற்ற அட்டவணை
Choose at least one question|අවම වශයෙන් ප්‍රශ්නයක් තෝරන්න|குறைந்தது ஒரு வினாவைத் தேர்ந்தெடு
Counts must be integers from 0 to 300|ගණන් 0 සිට 300 දක්වා පූර්ණ සංඛ්‍යා විය යුතුය|எண்ணிக்கை 0 முதல் 300 வரை முழு எண்ணாக இருக்க வேண்டும்
Selected marks do not match target. Adjust counts or clear target marks.|තෝරාගත් ලකුණු ඉලක්කයට නොගැළපේ. ගණන වෙනස් කරන්න හෝ ලකුණු ඉලක්කය ඉවත් කරන්න.|தேர்ந்தெடுத்த புள்ளிகள் இலக்குடன் பொருந்தவில்லை. எண்ணிக்கையை மாற்றவும் அல்லது இலக்கை அகற்றவும்.
Header and footer messages must be 300 characters or fewer|ශීර්ෂ සහ පාදක සටහන් අක්ෂර 300කට සීමා කරන්න|தலைப்பு, அடிக்குறிப்புச் செய்திகள் 300 எழுத்துகளுக்கு உட்பட வேண்டும்
Page numbering must start between 1 and 999|පිටු අංකනය 1 සහ 999 අතර අරඹන්න|பக்க எண்ணிடல் 1 முதல் 999க்குள் தொடங்க வேண்டும்
Border thickness must be between 0.5 and 4|මායිමේ ඝනකම 0.5 සිට 4 දක්වා විය යුතුය|எல்லைத் தடிமன் 0.5 முதல் 4 வரை இருக்க வேண்டும்
Reopen, revise or duplicate your saved examinations.|සුරැකි පත්‍ර විවෘත කරන්න, සංස්කරණය කරන්න හෝ පිටපත් සාදන්න.|சேமித்த தாள்களைத் திறந்து திருத்துங்கள் அல்லது நகலாக்குங்கள்.
Professional layouts|වෘත්තීය පත්‍ර ආකෘති|தொழில்முறை வடிவங்கள்
Four distinct presets. The registry is ready for additional templates.|වෙනස් ආකෘති හතරක් ඇත. තවත් ආකෘති එක් කළ හැක.|நான்கு தனித்துவமான வடிவங்கள் உள்ளன. மேலும் வடிவங்களைச் சேர்க்கலாம்.
Open a saved paper, then choose scheme or combined on its Export step.|සුරැකි පත්‍රයක් විවෘත කර ලකුණු පටිපාටිය හෝ ඒකාබද්ධ පෙරදසුන තෝරන්න.|சேமித்த தாளைத் திறந்து புள்ளியிடல் திட்டம் அல்லது இணைந்த முன்னோட்டத்தைத் தேர்ந்தெடு.
MCQ|බහුවරණ|பல்தேர்வு
mcq|බහුවරණ|பல்தேர்வு
short|කෙටි පිළිතුරු|குறுவிடை
structured|ව්‍යුහගත|கட்டமைப்பு
essay|රචනා|கட்டுரை
matching|ගැළපීම|பொருத்துதல்
all|සියල්ල|அனைத்தும்
easy|පහසු|எளிது
medium|මධ්‍යම|நடுத்தரம்
hard|අපහසු|கடினம்
comfortable|ඉඩ සහිත|வசதியான இடைவெளி
compact|සංක්ෂිප්ත|சுருக்கமான
paper|ප්‍රශ්න පත්‍රය|வினாத்தாள்
scheme|ලකුණු පටිපාටිය|புள்ளியிடல் திட்டம்
combined|පත්‍රය සහ පිළිතුරු|வினாத்தாளும் விடைகளும்
lines|ලිවීමේ පේළි|எழுதும் வரிகள்
none|නැත|இல்லை
blank|හිස් ඉඩ|வெற்று இடம்
grid|ප්‍රස්තාර කොටු|வரைபடக் கட்டம்
light|ලා පැහැය|ஒளித் தோற்றம்
dark|අඳුරු පැහැය|இருள் தோற்றம்
left|වම|இடது
center|මැද|நடு
right|දකුණ|வலது
Left|වම|இடது
Center|මැද|நடு
Right|දකුණ|வலது
note|සටහන|குறிப்பு
example|උදාහරණය|உதாரணம்
table|වගුව|அட்டவணை
diagram|රූපය|படம்
activity|ක්‍රියාකාරකම|செயற்பாடு
heading|ශීර්ෂය|தலைப்பு
unverified|තහවුරු කර නැත|சரிபார்க்கப்படவில்லை
illustrative|ආදර්ශයකි|மாதிரி
teacher-edited|ගුරුවරයා සංස්කරණය කළ|ஆசிரியர் திருத்தியது
O/L Science model — I & II|සා.පෙළ විද්‍යාව ආදර්ශ — I සහ II|சா.தர விஞ்ஞான மாதிரி — I மற்றும் II
O/L Paper I — MCQ|සා.පෙළ I පත්‍රය — බහුවරණ|சா.தர தாள் I — பல்தேர்வு
O/L Paper II — A & B|සා.පෙළ II පත්‍රය — A සහ B|சா.தர தாள் II — A மற்றும் B
Paper II — Part A practice|II පත්‍රය — A කොටසේ පුහුණුව|தாள் II — பகுதி A பயிற்சி
Paper II — Part B practice|II පත්‍රය — B කොටසේ පුහුණුව|தாள் II — பகுதி B பயிற்சி
School / provincial term test|පාසල් / පළාත් වාර පරීක්ෂණය|பாடசாலை / மாகாணத் தவணைச் சோதனை
Original past-paper reconstruction|මුල් පසුගිය ප්‍රශ්න පත්‍රය නැවත සැකසීම|மூலக் கடந்தகால வினாத்தாள் மீளமைப்பு
Unit test|ඒකක පරීක්ෂණය|அலகுச் சோதனை
Multi-lesson revision test|පාඩම් කිහිපයක පුනරීක්ෂණ පරීක්ෂණය|பல பாடப்பகுதி மீட்டல் சோதனை
Structured-question practice|ව්‍යුහගත ප්‍රශ්න පුහුණුව|கட்டமைப்பு வினாப் பயிற்சி
Short mixed paper|මිශ්‍ර කෙටි ප්‍රශ්න පත්‍රය|கலப்புக் குறு வினாத்தாள்
MCQ practice|බහුවරණ පුහුණුව|பல்தேர்வுப் பயிற்சி
Classroom quiz|පන්ති කෙටි පරීක්ෂණය|வகுப்பறைக் குறுஞ்சோதனை
Homework / weekly assignment|ගෙදර වැඩ / සතිපතා පැවරුම|வீட்டுப்பாடம் / வாராந்த ஒப்படை
Theory tute|සිද්ධාන්ත නිබන්ධනය|கோட்பாட்டுப் பாடத்தொகுப்பு
Revision tute|පුනරීක්ෂණ නිබන්ධනය|மீட்டல் பாடத்தொகுப்பு
Guided worksheet|මඟපෙන්වන ක්‍රියාකාරකම් පත්‍රිකාව|வழிகாட்டும் செயற்பாட்டுத் தாள்
Self-learning study pack|ස්වයං අධ්‍යයන පැකේජය|சுயகற்றல் தொகுப்பு
Practical / experiment worksheet|ප්‍රායෝගික / පරීක්ෂණ ක්‍රියාකාරකම් පත්‍රිකාව|செய்முறை / பரிசோதனைச் செயற்பாட்டுத் தாள்
Lesson short note|පාඩම් කෙටි සටහන|பாடச் சுருக்கக் குறிப்பு
One-page revision summary|එක් පිටුවක පුනරීක්ෂණ සාරාංශය|ஒரு பக்க மீட்டல் சுருக்கம்
Formula and units sheet|සූත්‍ර සහ ඒකක පත්‍රිකාව|சூத்திரம் மற்றும் அலகுத் தாள்
Comparison sheet|සැසඳීම් පත්‍රිකාව|ஒப்பீட்டுத் தாள்
Diagram revision sheet|රූප පුනරීක්ෂණ පත්‍රිකාව|பட மீட்டல் தாள்
Mind map / process sheet|සංකල්ප සිතියම / ක්‍රියාවලි පත්‍රිකාව|மனவரைபடம் / செயல்முறைத் தாள்
Worked-example sheet|විසඳූ උදාහරණ පත්‍රිකාව|தீர்க்கப்பட்ட உதாரணத் தாள்
Lesson / topic-wise past questions|පාඩම් / මාතෘකා අනුව පසුගිය ප්‍රශ්න|பாடப்பகுதி / தலைப்புவாரி கடந்தகால வினாக்கள்
Year-wise question collection|වර්ෂ අනුව ප්‍රශ්න එකතුව|ஆண்டுவாரி வினாத் தொகுப்பு
Paper I|I පත්‍රය|தாள் I
Paper II|II පත්‍රය|தாள் II
Paper II — Part A|II පත්‍රය — A කොටස|தாள் II — பகுதி A
Paper II — Part B|II පත්‍රය — B කොටස|தாள் II — பகுதி B
Original paper|මුල් ප්‍රශ්න පත්‍රය|மூல வினாத்தாள்
Multiple choice|බහුවරණ|பல்தேர்வு
Structured questions|ව්‍යුහගත ප්‍රශ්න|கட்டமைப்பு வினாக்கள்
Revision questions|පුනරීක්ෂණ ප්‍රශ්න|மீட்டல் வினாக்கள்
Structured practice|ව්‍යුහගත පුහුණුව|கட்டமைப்புப் பயிற்சி
Quick practice|කෙටි පුහුණුව|விரைவுப் பயிற்சி
Quick quiz|කෙටි පරීක්ෂණය|குறுஞ்சோதனை
This week’s work|මෙම සතියේ වැඩ|இந்த வாரப் பணி
Learning outcomes|ඉගෙනුම් ප්‍රතිඵල|கற்றல் விளைவுகள்
Lesson notes|පාඩම් සටහන්|பாடக் குறிப்புகள்
Worked examples|විසඳූ උදාහරණ|தீர்க்கப்பட்ட உதாரணங்கள்
Practice questions|පුහුණු ප්‍රශ්න|பயிற்சி வினாக்கள்
Quick recap|කෙටි මතක් කිරීම|விரைவான மீள்பார்வை
Topic practice|මාතෘකා පුහුණුව|தலைப்புப் பயிற்சி
Past-question practice|පසුගිය ප්‍රශ්න පුහුණුව|கடந்தகால வினாப் பயிற்சி
Challenge questions|අභියෝග ප්‍රශ්න|சவால் வினாக்கள்
Activities|ක්‍රියාකාරකම්|செயற்பாடுகள்
Learning objectives|ඉගෙනුම් අරමුණු|கற்றல் நோக்கங்கள்
Read and explore|කියවා සොයා බලන්න|வாசித்து ஆராயுங்கள்
Try an activity|ක්‍රියාකාරකමක් කරන්න|செயற்பாட்டை முயலுங்கள்
Practise|පුහුණු වන්න|பயிற்சி செய்
Self-check|ඔබම පරීක්ෂා කරන්න|சுய மதிப்பீடு
Aim|අරමුණ|நோக்கம்
Apparatus and materials|උපකරණ සහ ද්‍රව්‍ය|உபகரணங்களும் பொருட்களும்
Method and safety|ක්‍රමය සහ ආරක්ෂාව|முறையும் பாதுகாப்பும்
Observations|නිරීක්ෂණ|அவதானிப்புகள்
Results and graph|ප්‍රතිඵල සහ ප්‍රස්තාරය|முடிவுகளும் வரைபடமும்
Conclusion|නිගමනය|முடிவு
Review questions|නැවත විමසීමේ ප්‍රශ්න|மீளாய்வு வினாக்கள்
Key ideas|ප්‍රධාන අදහස්|முக்கிய கருத்துகள்
Revision at a glance|බැලූ බැල්මට පුනරීක්ෂණය|ஒரே பார்வையில் மீட்டல்
Formulas, symbols and units|සූත්‍ර, සංකේත සහ ඒකක|சூத்திரங்கள், குறியீடுகள், அலகுகள்
Compare and remember|සසඳා මතක තබාගන්න|ஒப்பிட்டு நினைவுகொள்
Reference diagrams|යොමු රූප|குறிப்புப் படங்கள்
Label and practise|නම් කර පුහුණු වන්න|பெயரிட்டு பயிற்சி செய்
Connections and processes|සම්බන්ධතා සහ ක්‍රියාවලි|தொடர்புகளும் செயல்முறைகளும்
Try it yourself|ඔබම කර බලන්න|நீங்களே முயலுங்கள்
MCQ collection|බහුවරණ එකතුව|பல்தேர்வுத் தொகுப்பு
Extended questions|දීර්ඝ ප්‍රශ්න|விரிவான வினாக்கள்
Past-question collection|පසුගිය ප්‍රශ්න එකතුව|கடந்தகால வினாத் தொகுப்பு
Answer all 40 questions. Choose the correct or most appropriate answer.|ප්‍රශ්න 40ටම පිළිතුරු සපයන්න. නිවැරදි හෝ වඩාත් ගැළපෙන පිළිතුර තෝරන්න.|40 வினாக்களுக்கும் விடையளிக்கவும். சரியான அல்லது மிகப் பொருத்தமான விடையைத் தேர்ந்தெடுக்கவும்.
Answer all four questions in the spaces provided.|ලබා දී ඇති ඉඩ තුළ ප්‍රශ්න හතරටම පිළිතුරු සපයන්න.|வழங்கிய இடங்களில் நான்கு வினாக்களுக்கும் விடையளிக்கவும்.
Answer any three of the five questions. Use separate answer sheets.|ප්‍රශ්න පහෙන් ඕනෑම තුනකට වෙනම පිළිතුරු පත්‍රවල පිළිතුරු සපයන්න.|ஐந்து வினாக்களில் ஏதேனும் மூன்றிற்கு தனி விடைத்தாள்களில் விடையளிக்கவும்.
Answer all questions.|සියලු ප්‍රශ්නවලට පිළිතුරු සපයන්න.|அனைத்து வினாக்களுக்கும் விடையளிக்கவும்.
Answer the questions as instructed.|උපදෙස් අනුව ප්‍රශ්නවලට පිළිතුරු සපයන්න.|அறிவுறுத்தல்களின்படி வினாக்களுக்கு விடையளிக்கவும்.
Keep original instructions and source numbering.|මුල් උපදෙස් සහ ප්‍රශ්න අංක තබාගන්න.|மூல அறிவுறுத்தல்களையும் வினா எண்களையும் தக்கவைக்கவும்.
Choose one answer.|එක් පිළිතුරක් තෝරන්න.|ஒரு விடையைத் தேர்ந்தெடுக்கவும்.
Show working and include units where required.|අවශ්‍ය තැන්වල ගණනය කිරීමේ පියවර සහ ඒකක දක්වන්න.|தேவையான இடங்களில் கணக்கீட்டுப் படிகளையும் அலகுகளையும் காட்டவும்.
Choose the best answer.|වඩාත් ගැළපෙන පිළිතුර තෝරන්න.|மிகப் பொருத்தமான விடையைத் தேர்ந்தெடுக்கவும்.
Answer briefly.|කෙටියෙන් පිළිතුරු සපයන්න.|சுருக்கமாக விடையளிக்கவும்.
Complete the activities and show your working.|ක්‍රියාකාරකම් සම්පූර්ණ කර ඔබේ ක්‍රමය දක්වන්න.|செயற்பாடுகளை முடித்து செயல்முறையைக் காட்டவும்.
Complete the tasks in the spaces provided.|දී ඇති ඉඩ තුළ කාර්යයන් සම්පූර්ණ කරන්න.|வழங்கிய இடங்களில் பணிகளை முடிக்கவும்.
Learning resource — not an examination permission document.|ඉගෙනුම් සම්පතකි — විභාගයට රැගෙන යාමට අවසර පත්‍රයක් නොවේ.|கற்றல் வளம் — தேர்விற்குக் கொண்டு செல்லும் அனுமதி ஆவணம் அல்ல.
Question continued|ප්‍රශ්නයේ ඉතිරි කොටස|வினாவின் தொடர்ச்சி
Marking scheme / පිළිතුරු පත්‍රය|ලකුණු දීමේ පටිපාටිය / පිළිතුරු පත්‍රය|புள்ளியிடல் திட்டம் / விடைக்குறிப்பு
Marking scheme / පිළිතුරු|ලකුණු දීමේ පටිපාටිය / පිළිතුරු|புள்ளியிடல் திட்டம் / விடைக்குறிப்பு
Marking scheme|ලකුණු දීමේ පටිපාටිය|புள்ளியிடல் திட்டம்
MISSING ANSWER — teacher review required|පිළිතුර නැත — ගුරු පරීක්ෂාව අවශ්‍යයි|விடை இல்லை — ஆசிரியர் பரிசீலனை தேவை
Name / Index No.|නම / විභාග අංකය|பெயர் / சுட்டெண்
Diagram|රූපය|படம்
Table|වගුව|அட்டவணை
Answers|පිළිතුරු|விடைகள்
Main section|ප්‍රධාන කොටස|முதன்மைப் பகுதி
Main|ප්‍රධාන කොටස|முதன்மைப் பகுதி
Teacher adapted|ගුරුවරයා සංශෝධනය කළ|ஆசிரியர் தழுவியது
`;
export const dictionary=Object.fromEntries(rows.trim().split('\n').filter(line=>line.trim()).map(line=>{const [en,si,ta]=line.split('|');return [en,{si,ta}]}));
export function setLanguage(lang){active=languages.includes(lang)?lang:'en'}
export const getLanguage=()=>active;
export function t(text,lang=active){if(lang==='en'||!text)return String(text??'');const original=String(text),s=original.trim();let translated=dictionary[s]?.[lang];if(!translated){const plain=s.replace(/^[＋+✓●]\s*/,''),prefix=s.slice(0,s.length-plain.length);if(dictionary[plain]?.[lang])translated=prefix+dictionary[plain][lang]}
 if(!translated){for(const [pattern,fn]of patterns){const match=s.match(pattern);if(match){translated=fn(match,lang);break}}}
 if(!translated&&s.includes(' / ')){const first=Object.keys(dictionary).filter(k=>s.startsWith(k+' / ')).sort((a,b)=>b.length-a.length)[0];if(first)translated=dictionary[first][lang]}
 return translated?original.replace(s,translated):original}
const choose=(lang,si,ta)=>lang==='si'?si:ta;
const patterns=[
 [/^(\d+) min$/,([,n],l)=>`${n} ${t('min',l)}`],
 [/^(\d+) required marks · (\d+) printed$/,([,a,b],l)=>choose(l,`අනිවාර්ය ලකුණු ${a} · මුද්‍රිත ලකුණු ${b}`,`தேவையான புள்ளிகள் ${a} · அச்சிட்ட புள்ளிகள் ${b}`)],
 [/^(\d+) questions?$/,([,n],l)=>choose(l,`ප්‍රශ්න ${n}`,`${n} வினாக்கள்`)],
 [/^· (\d+) required marks$/,([,n],l)=>choose(l,`· අනිවාර්ය ලකුණු ${n}`,`· தேவையான புள்ளிகள் ${n}`)],
 [/^(\d+) saved papers$/,([,n],l)=>choose(l,`සුරැකි පත්‍ර ${n}`,`${n} சேமித்த வினாத்தாள்கள்`)],
 [/^(\d+) questions available$/,([,n],l)=>choose(l,`ප්‍රශ්න ${n}ක් ඇත`,`${n} வினாக்கள் உள்ளன`)],
 [/^My papers → (\d+) saved papers$/,([,n],l)=>t('My Papers',l)+` → ${n}`],
 [/^Question banks → (\d+) questions available$/,([,n],l)=>t('Question Banks',l)+` → ${n}`],
 [/^Format check \((\d+)\)$/,([,n],l)=>choose(l,`ආකෘති පරීක්ෂාව (${n})`,`வடிவச் சரிபார்ப்பு (${n})`)],
 [/^Subquestion — level (\d+)$/,([,n],l)=>choose(l,`උපප්‍රශ්නය — මට්ටම ${n}`,`துணைவினா — நிலை ${n}`)],
 [/^Section (\d+)$/,([,n],l)=>choose(l,`කොටස ${n}`,`பகுதி ${n}`)],
 [/^Question (\d+)$/,([,n],l)=>choose(l,`ප්‍රශ්නය ${n}`,`வினா ${n}`)],
 [/^Move item (\d+) (up|down)$/,([,n,d],l)=>choose(l,`${n} අයිතමය ${d==='up'?'ඉහළට':'පහළට'} ගෙන යන්න`,`${n} உருப்படியை ${d==='up'?'மேலே':'கீழே'} நகர்த்து`)],
 [/^Row (\d+) column (\d+)$/,([,a,b],l)=>choose(l,`පේළිය ${a}, තීරුව ${b}`,`நிரை ${a}, நெடுவரிசை ${b}`)],
 [/^(.+): (\d+) of (\d+) questions added\.$/,([,s,a,b],l)=>choose(l,`${t(s,l)}: ප්‍රශ්න ${b}න් ${a}ක් එක් කර ඇත.`,`${t(s,l)}: ${b} வினாக்களில் ${a} சேர்க்கப்பட்டன.`)],
 [/^(.+): not enough questions for “choose (\d+)”\.$/,([,s,n],l)=>choose(l,`${t(s,l)}: ${n}ක් තේරීමට ප්‍රශ්න ප්‍රමාණවත් නැත.`,`${t(s,l)}: ${n} வினாக்களைத் தேர்வதற்குப் போதுமான வினாக்கள் இல்லை.`)],
 [/^(.+): contains a question that is not (.+)\.$/,([,s,k],l)=>choose(l,`${t(s,l)}: ${t(k.toLowerCase(),l)} නොවන ප්‍රශ්නයක් ඇත.`,`${t(s,l)}: ${t(k.toLowerCase(),l)} அல்லாத வினா உள்ளது.`)],
 [/^(.+): requested (\d+), available (\d+)$/,([,k,a,b],l)=>choose(l,`${t(k,l)}: ඉල්ලූ ගණන ${a}, ඇති ගණන ${b}`,`${t(k,l)}: கோரியது ${a}, இருப்பது ${b}`)],
 [/^Grade (.+)$/,([,v],l)=>t('Grade',l)+' '+v],
 [/^(.+) \/ Grade (.+)$/,([,s,g],l)=>`${t(s,l)} / ${t('Grade',l)} ${g}`],
 [/^(\d+) questions · (.+)$/,([,n,x],l)=>choose(l,`ප්‍රශ්න ${n} · ${x}`,`${n} வினாக்கள் · ${x}`)],
 [/^Offline cache unavailable: (.+)$/,([,x],l)=>choose(l,`අන්තර්ජාල රහිත ගබඩාව භාවිත කළ නොහැක: ${x}`,`இணையமற்ற சேமிப்பகம் கிடைக்கவில்லை: ${x}`)],
 [/^Page preview: (.+)$/,([,x],l)=>choose(l,`පිටු පෙරදසුන: ${x}`,`பக்க முன்னோட்டம்: ${x}`)],
 [/^(.+) · Grade (.+) · (\d+) questions$/,([,s,g,n],l)=>`${t(s,l)} · ${t('Grade',l)} ${g} · ${n}`]
];
const originals=new WeakMap();
export function localizeDOM(root=document.body){if(!root)return;const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);for(const node of nodes){const parent=node.parentElement;if(!parent||parent.closest('script,style,textarea,input,#preview,#print,[data-user-content],.stem,.picker-question p,.existing-images'))continue;const value=node.nodeValue;if(!value.trim())continue;let entry=originals.get(node);if(!entry||value!==entry.last)entry={en:value,last:value};const next=t(entry.en);if(next!==value)node.nodeValue=next;entry.last=next;originals.set(node,entry)}for(const el of root.querySelectorAll('[placeholder],[aria-label],[title]')){if(el.closest('#preview,#print,[data-user-content]'))continue;for(const attr of ['placeholder','aria-label','title'])if(el.hasAttribute(attr)){const key='data-i18n-'+attr;if(!el.hasAttribute(key))el.setAttribute(key,el.getAttribute(attr));el.setAttribute(attr,t(el.getAttribute(key)))}}}
export function observeLanguage(){const observer=new MutationObserver(()=>{observer.disconnect();localizeDOM();observer.observe(document.body,{childList:true,subtree:true,characterData:true})});observer.observe(document.body,{childList:true,subtree:true,characterData:true});return observer}

export function contentInLanguage(node,lang){const translation=node.translations?.[lang];const out={...node};if(translation&&typeof translation==='object'){for(const k of ['stem','title','answer','explanation','options','table','caption'])if(translation[k]!==undefined)out[k]=structuredClone(translation[k]);out.originalLanguage=node.originalLanguage||node.language;out.language=lang;delete out.translations}if(node.children)out.children=node.children.map(n=>contentInLanguage(n,lang));return out}
export function localizedPaper(p){return {...p,questions:(p.questions||[]).map(q=>contentInLanguage(q,p.language||'en'))}}
