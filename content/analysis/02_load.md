---
Title: Jämförelse av prestanda
Description: En jämförelse av prestanda hos formula1.com, nascar.com, och wrc.com
Template: technology
HTMLClass: kmom-box
---

Jämförelse av prestanda
==========================

Urval
-----------------------
Jag har valt tre stycken motorsports sidor att analysera.
- <a href="formula1.com">formula1.com</a>
- <a href="nascar.com">nascar.com</a>
- <a href="wrc.com">wrc.com</a>

<br>

Metod
-----------------------
För att mäta prestandan av dessa sidor kommer jag använda mig av <a href="https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect&hl=sv">pagespeed.web.dev</a> och utvecklar verktygen i chrome och firefox.

Resultat
-----------------------
<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vREGWBuUzlZ_qxO2jWzLS2ubVtfwZGd8fP4lSmXwBP8jeJPtMFO1lD-H3pLDxMcZlnFR_MfMOUW9ZhS/pubhtml?widget=true&amp;headers=false" class="google-sheet-table"></iframe>
<a href="https://docs.google.com/spreadsheets/d/1HVgFODDMeiUmpwJcdTMKHy_p_0ti92QbwF63SAoUDnc/edit?usp=sharing">Länk till dokumentet</a>

<br>

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRu1tIi0fm6FNw--yN8HXK-8hg_rebM9cef10IZ1FUErjkiHjNyikM2HMKyJXKqILeoDcoVhK5w6Iel/pubhtml?widget=true&amp;headers=false"></iframe>
<a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRu1tIi0fm6FNw--yN8HXK-8hg_rebM9cef10IZ1FUErjkiHjNyikM2HMKyJXKqILeoDcoVhK5w6Iel/pubhtml"></a>

<br>

<a href="formula1.com">formula1.com</a>
<img src="../image/f1.png">
Denna sidan får mest klagomål på hur dom använder sina bilder. Pagespeed tycker att dom ska ha modernare format, använda bilder med rätt storlek, koda bilderna effektivt. Dessa klagomål får dom både på mobil och desktop.

<a href="wrc.com">wrc.com</a>
<img src="../image/wrc.png">
Här får dom också mycket klagomål på sina bilder. Speciellt att dom ska använda rätt storlek och format. När jag laddade in sidan på min mobil så han den även ladda ganska mycket content innan den skickade mig till wrc.com/en för att återigen ladda in massa content. Vet inte om något gick fel till på pagespeed dock, körde anaylsen flera gånger och fick enormt stora LCP på mobil sidan. Den var inte jättesnabb på min telefon heller, men det kändes lite överdrivet.

<a href="nascar.com">nascar.com</a>
<img src="../image/nascar.png">
Nascars största problem med prestanda är dock inte deras bilder. Dom verkar ju använda rätt storlek och format. Men enligt pagespeed kommer dom spara in mest på att reducera mängder oanvänd javacsript.


Analys
-----------------------
Alla sidor kunde förbättra sina sidor genom att reducera mängden javascript som är oanvänt. Speciellt WRC och Nascar där det på mobilsidan var mellan 7 och 14 sekunder att spara. Sidorna får dock bättre betyg av användare än av simuleringen på mobilsidan. Nascar var den enda sidan som inte hade problem med sina bilder.

Det finns en klar förlorare på både desktop och mobiler, WRC. Dom hade störst problem med bilder och överförde 4 gånger så mycket data som dom andra sidorna. 

Den som enligt datan och användare klarade sig bäst var Nascar. Men inte långt ifrån var Formel1. Både har väldigt jämlika resultat, men Formel1 faller lite på sina bilder som tar längre tid.

För att en sida ska enligt mig vara snabb så bör det kunna gå att använda sidan på runt 1 sekund. Det värsta som händer är när det laddas långsamt och layouten ändras för bilder börjar laddas och ta plats, vilket får hemsidan att kännas riktigt långsam. Ironiskt nog så är varken WRC, Nascar eller Formel1 snabbt nog.


Referenser
-----------------------

<a href="https://pagespeed.web.dev/">PageSpeed</a>

Skrivet av: Joel Funk Persson

