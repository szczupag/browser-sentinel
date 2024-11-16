const northAmericanBankDomains = [
  'jpmorgan.com',
  'bankofamerica.com',
  'citigroup.com',
  'wellsfargo.com',
  'goldmansachs.com',
  'morganstanley.com',
  'usbank.com',
  'pnc.com',
  'truist.com',
  'capitalone.com',
  'tdbank.com',
  'bmo.com',
  'rbc.com',
  'scotiabank.com',
  'cibc.com',
  'nbc.ca',
  'santander.com',
  'ally.com',
  'usaa.com',
  'discover.com',
  'tiaabank.com',
  '53.com',
  'huntington.com',
  'key.com',
  'citizensbank.com',
  'regions.com',
  'mtb.com',
  'chase.com',
  'schwab.com',
  'americanexpress.com',
  'synchrony.com',
  'navyfederal.org',
  'suntrust.com',
  'bbva.com',
  'bbt.com',
  'comerica.com',
  'zionsbank.com',
  'fnbo.com',
  'unionbank.com',
  'bankunited.com',
  'firstrepublic.com',
  'svb.com',
  'easternbank.com',
  'hancockwhitney.com',
  'synovus.com',
  'firsthorizon.com',
  'websterbank.com',
  'bokf.com',
  'associatedbank.com',
  'oldnational.com',
  'wintrust.com',
  'frostbank.com',
  'fcbanking.com',
  'signatureny.com',
  'bannerbank.com',
  'fultonbank.com',
  'prosperitybankusa.com',
  'valleynationalbank.com',
  'stifel.com',
  'raymondjames.com',
  'bancorpsouth.com',
  'berkshirebank.com',
  'centerstatebank.com',
  'bankatfirst.com',
  'iberiabank.com',
  'bankozarks.com',
  'peoples.com',
  'tcfbank.com',
  'talmerbank.com',
  'ucbi.com',
  'umpquabank.com',
  'westernalliancebank.com',
  'wsfsbank.com',
  'hawaiinational.com',
  'centralpacificbank.com',
  'bancfirst.com',
  'bannerbank.com',
  'cadencebank.com',
  'capitalcitybank.com',
  'cnb.com',
  'columbiabank.com',
  'csbt.com',
  'flagstar.com',
  'frb.com',
  'greatwesternbank.com',
  'hanmi.com',
  'homestreet.com',
  'independent-bank.com',
  'nbtbank.com',
  'oceanfirst.com',
  'pinnaclebank.com',
  'provident.bank',
  'renasantbank.com',
  'simmonsfirst.com',
  'southstate.com',
  'texascapitalbank.com',
  'townebank.com',
  'trivest.com',
  'unitedbank.com',
  'washingtonfederal.com',
  'wesbanco.com'
];

const southAmericanBankDomains = [
  // Brazil
  'bb.com.br',
  'itau.com.br',
  'bradesco.com.br',
  'santander.com.br',
  'caixa.gov.br',
  'banrisul.com.br',
  'original.com.br',
  'nubank.com.br',
  'inter.co',
  'btgpactual.com',

  // Argentina
  'bancogalicia.com.ar',
  'macro.com.ar',
  'bancoprovincia.com.ar',
  'bbva.com.ar',
  'santander.com.ar',
  'hipotecario.com.ar',
  'bna.com.ar',
  'icbc.com.ar',
  'supervielle.com.ar',
  'bancociudad.com.ar',

  // Colombia
  'bancolombia.com',
  'bancodebogota.com',
  'davivienda.com',
  'bancodeoccidente.com.co',
  'bbva.com.co',
  'bancopopular.com.co',
  'colpatria.com',
  'bancoavvillas.com.co',
  'bancodelarepublica.gov.co',
  'grupobancolombia.com',

  // Chile
  'bancochile.cl',
  'santander.cl',
  'bci.cl',
  'bancoestado.cl',
  'scotiabank.cl',
  'itau.cl',
  'bice.cl',
  'security.cl',
  'falabella.com',
  'bancointernacional.cl',

  // Peru
  'viabcp.com',
  'bbva.pe',
  'interbank.pe',
  'scotiabank.com.pe',
  'bn.com.pe',
  'banbif.com.pe',
  'pichincha.pe',
  'mibanco.com.pe',
  'citibank.com.pe',
  'bancomercio.com',

  // Venezuela
  'banesco.com',
  'provincial.com',
  'mercantilbanco.com',
  'bancaribe.com.ve',
  'bod.com.ve',
  'bancodevenezuela.com',
  'exterior.com',
  'banplus.com',
  'bancamiga.com',
  'sofitasa.com',

  // Ecuador
  'pichincha.com',
  'produbanco.com.ec',
  'bancoguayaquil.com',
  'bancointernacional.com.ec',
  'bancobolivariano.com',
  'banco-solidario.com',
  'bancoaustro.com',
  'bancodelpacifico.com',
  'bancodelaproduccion.com',
  'coopjep.fin.ec',

  // Uruguay
  'brou.com.uy',
  'santander.com.uy',
  'itau.com.uy',
  'bbva.com.uy',
  'scotiabank.com.uy',
  'bancobrou.com.uy',
  'hsbc.com.uy',
  'bandes.com.uy',
  'heritage.com.uy',
  'bancocredito.com.uy',

  // Paraguay
  'bnf.gov.py',
  'bancontinental.com.py',
  'visionbanco.com',
  'interfisa.com.py',
  'regional.com.py',
  'familiar.com.py',
  'bancognb.com.py',
  'itau.com.py',
  'bancop.com.py',
  'fielco.com.py',

  // Bolivia
  'bancosol.com.bo',
  'bdp.com.bo',
  'bmsc.com.bo',
  'bnb.com.bo',
  'bancoecofuturo.com.bo',
  'bancounion.com.bo',
  'bancofie.com.bo',
  'bancofortaleza.com.bo',
  'bancoprocredit.com.bo',
  'bancoprodem.bo',

  // Guyana
  'bankofbaroda.gy',
  'republicguyana.com',
  'rbcroyalbank.com/caribbean/guyana',
  'scotiabank.com/gd/en/personal.html',
  'guyanabank.com',

  // Suriname
  'dsb.sr',
  'hakrinbank.com',
  'republicbanksr.com',
  'fina-bank.com',
  'vnbbank.com'
];

const mexicanAndCentralAmericanBankDomains = [
  // Mexico
  'bbva.mx',
  'banamex.com',
  'santander.com.mx',
  'banorte.com',
  'hsbc.com.mx',
  'scotiabank.com.mx',
  'inbursa.com',
  'banregio.com',
  'banbajio.com',
  'bancoazteca.com.mx',
  'afirme.com',
  'bancoppel.com',
  'bancomext.com',
  'banobras.gob.mx',
  'nafin.com',
  
  // Panama
  'banistmo.com',
  'bancogeneral.com',
  'bac.net',
  'scotiabank.com.pa',
  'banesco.com.pa',
  'globalbank.com.pa',
  'bbpanama.com',

  // Costa Rica
  'bancobcr.com',
  'bancopopular.fi.cr',
  'bncr.fi.cr',
  'davivienda.cr',
  'scotiabankcr.com',
  'baccredomatic.com',

  // Guatemala
  'bi.com.gt',
  'banguat.gob.gt',
  'bam.com.gt',
  'banrural.com.gt',
  'interbanco.com.gt',

  // El Salvador
  'bancoagricola.com',
  'bancoscotia.com.sv',
  'davivienda.com.sv',
  'bancodecuscatlan.com',
  'bancohipotecario.com.sv',

  // Honduras
  'bac.hn',
  'bancatlan.hn',
  'ficohsa.com',
  'bancodeoccidente.hn',
  'banpais.hn',

  // Nicaragua
  'banpro.com.ni',
  'lafise.com',
  'bancentro.net',
  'bdfnet.com',
  'ficohsa.com.ni',

  // Belize
  'atlanticbank.com',
  'belizebank.com',
  'heritagebankinternational.com',
  'bbbelizeltd.com',

  // Regional banks
  'baccredomatic.com',
  'ficohsa.com',
  'davivienda.com',
  'scotiabank.com',

  // Development banks
  'bcie.org',
  'cabei.org',

  // Additional banks
  'bicsa.com',
  'citibank.com',
  'hsbc.com',
  'aztecabank.com',
  'promerica.com',
  'banrural.com',
  'bancolombia.com',
  'banreservas.com',
  'popular.com',
  'bancosol.com.bo',
  'bancoaliado.com',
  'multibank.com.pa',
  'citi.com',
  'lafise.com',
  'bancosantacruz.com',
  'bantrab.com.gt',
  'vivibanco.com',
  'bancoazteca.com.gt',
  'bancoguatemalteco.com.gt',
  'bancouno.com.ni',
  'bancocontinental.hn',
  'bancopopular.hn',
  'bancoazul.com',
  'grupopromerica.com'
];

const eastAsiaOceaniaBankDomains = [
  // Japan
  'mizuhobank.co.jp',
  'bk.mufg.jp',
  'smbc.co.jp',
  'resonabank.co.jp',
  'shinseibank.com',
  'fukuokabank.co.jp',
  'rakuten-bank.co.jp',
  'sbigroup.co.jp',
  'jibunbank.co.jp',
  'surugabank.co.jp',

  // South Korea
  'kbstar.com',
  'shinhan.com',
  'wooribank.com',
  'ibk.co.kr',
  'hanabank.com',
  'standardchartered.co.kr',
  'citibank.co.kr',
  'kjbank.com',
  'knbank.co.kr',
  'dgb.co.kr',

  // China (Mainland)
  'icbc.com.cn',
  'abchina.com',
  'boc.cn',
  'ccb.com',
  'bankcomm.com',
  'cmbchina.com',
  'cebbank.com',
  'cmbc.com.cn',
  'pingan.com',
  'citicbank.com',

  // Hong Kong
  'hsbc.com.hk',
  'hangseng.com',
  'bochk.com',
  'dbs.com.hk',
  'sc.com/hk',
  'ocbcwhhk.com',
  'bankofeastasia.com',
  'ncb.com.hk',
  'publicbank.com.hk',
  'chiyubank.com',

  // Macau
  'bocmacau.com',
  'bancocgd.com',
  'lusobank.com.mo',
  'tai-fung.com.mo',
  'macaubank.com',
  'ocbc.com/mo',
  'winglung.com',
  'icbc.com.mo',
  'bnu.com.mo',

  // Singapore
  'dbs.com.sg',
  'ocbc.com',
  'uobgroup.com',
  'maybank.com.sg',
  'sc.com/sg',
  'citibank.com.sg',
  'hsbc.com.sg',
  'icbc.com.sg',

  // Australia
  'commbank.com.au',
  'anz.com.au',
  'nab.com.au',
  'westpac.com.au',
  'macquarie.com',
  'bendigobank.com.au',
  'bankofqueensland.com.au',
  'suncorp.com.au',
  'amp.com.au',
  'bankwest.com.au',
  'ing.com.au',
  'mebank.com.au',
  'rabobank.com.au',
  'arabbank.com.au',
  'hsbc.com.au',

  // New Zealand
  'anz.co.nz',
  'asb.co.nz',
  'bnz.co.nz',
  'westpac.co.nz',
  'kiwibank.co.nz',
  'tsb.co.nz',
  'heartland.co.nz',
  'co-operativebank.co.nz',
  'rabobank.co.nz',
  'sbs.net.nz',

  // Pacific Islands
  // Fiji
  'bred.com.fj',
  'westpac.com.fj',
  'hfc.com.fj',
  'bsp.com.fj',

  // Papua New Guinea
  'bsp.com.pg',
  'kina.com.pg',
  'westpac.com.pg',
  'anz.com/png',

  // Solomon Islands
  'bsp.com.sb',
  'anzsolomons.com.sb',
  'bred.com.sb',

  // Vanuatu
  'nbv.vu',
  'bred.vu',
  'bsp.com.vu',

  // Samoa
  'bsp.ws',
  'anz.com',
  'nbs.ws',

  // Tonga
  'tdb.to',
  'bsp.to',
  'mbf.to',
];

const ukBankDomains = [
  // Major Retail Banks
  'hsbc.co.uk',
  'barclays.co.uk',
  'natwest.com',
  'lloydsbank.com',
  'santander.co.uk',
  'halifax.co.uk',
  'rbs.co.uk',
  'tsb.co.uk',
  'virginmoney.com',
  'co-operativebank.co.uk',
  
  // Digital/Challenger Banks
  'monzo.com',
  'starlingbank.com',
  'revolut.com',
  'chase.co.uk',
  'atom.bank',
  'aldermore.co.uk',
  'oaknorth.co.uk',
  'recognisebank.co.uk',
  'gatehousebank.com',
  'tandem.co.uk',

  // Building Societies
  'nationwide.co.uk',
  'yorkshirebs.co.uk',
  'skipton.co.uk',
  'coventrybuildingsociety.co.uk',
  'leedsbuildingsociety.co.uk',
  'principality.co.uk',
  'newcastle.co.uk',
  'westbrom.co.uk',
  'nottinghambs.co.uk',
  'cambridge-bs.co.uk',

  // Investment Banks & Financial Services
  'standardchartered.com',
  'schroders.com',
  'closebrothers.com',
  'investec.com',
  'rathbones.com',
  'brewin.co.uk',
  'quilter.com',
  'paragonbank.co.uk',
  'shawbrook.co.uk',
  'metrobank.plc.uk',

  // Private Banks
  'coutts.com',
  'hoaresbank.co.uk',
  'handelsbanken.co.uk',
  'brownshipley.com',
  'arbuthnot.co.uk',
  'weatherbys.bank',
  'adambank.com',
  'cairnmorgan.com',
  'hampdengroup.co.uk',
  'sginvestment.co.uk',

  // Regional & Specialist Banks
  'cybg.com',
  'securetrustbank.com',
  'pcf.bank',
  'cambridge-credit.co.uk',
  'triodos.co.uk',
  'unity.co.uk',
  'reliance.bank',
  'charitybankltd.co.uk',
  'bankofireland.co.uk',
  'aibgb.co.uk',

  // Islamic Banks
  'alrayanbank.co.uk',
  'gatehousebank.com',
  'blme.com',
  'qib-uk.com',
  'umbank.co.uk',

  // Other Financial Institutions
  'jnbank.co.uk',
  'fcmb.co.uk',
  'zenithbank.co.uk',
  'fbnbank.co.uk',
  'gtbank.co.uk',

  // International Banks with UK Operations
  'db.com/uk',
  'bnpparibas.co.uk',
  'ca-cib.com',
  'socgen.co.uk',
  'mizuho.com',
  'smbc.co.jp/global/uk',
  'icbc.co.uk',
  'citibank.co.uk',
  'jpmorgan.com/GB',
  'goldmansachs.com/uk',

  // Building Societies (Additional)
  'bathbuildingsociety.co.uk',
  'bucksbs.co.uk',
  'chorleybs.co.uk',
  'darlington.co.uk',
  'dudleybuildingsociety.co.uk',
  'familybs.co.uk',
  'furnessbs.co.uk',
  'hinckleyandrigby.co.uk',
  'ibs.co.uk',
  'loughboroughbs.co.uk',
];

const euBankDomains = [
  // Germany
  'deutsche-bank.de',
  'commerzbank.de',
  'postbank.de',
  'dzbank.de',
  'ing.de',
  'n26.com',
  'sparkasse.de',
  'volkswagenbank.de',
  'targobank.de',
  'comdirect.de',

  // France
  'bnpparibas.fr',
  'societegenerale.fr',
  'credit-agricole.fr',
  'cmne.fr',
  'bred.fr',
  'banquepopulaire.fr',
  'creditmutuel.fr',
  'lcl.fr',
  'labanquepostale.fr',
  'hsbc.fr',

  // Italy
  'unicredit.it',
  'intesasanpaolo.com',
  'mps.it',
  'bancobpm.it',
  'bper.it',
  'popso.it',
  'credem.it',
  'gruppocarige.it',
  'bancamediolanum.it',
  'fineco.it',

  // Spain
  'bbva.es',
  'santander.es',
  'caixabank.es',
  'bankinter.com',
  'sabadell.com',
  'unicaja.es',
  'ibercaja.es',
  'kutxabank.es',
  'abanca.com',
  'cajamar.es',

  // Netherlands
  'ing.nl',
  'rabobank.nl',
  'abnamro.nl',
  'triodos.nl',
  'vanlanschot.nl',
  'knab.nl',
  'bunq.com',
  'nmb.nl',
  'sns.nl',
  'asn.nl',

  // Belgium
  'kbc.be',
  'bnpparibasfortis.be',
  'belfius.be',
  'ing.be',
  'argenta.be',
  'axa.be',
  'crelan.be',
  'deutschebank.be',
  'cbc.be',
  'bpost.be',

  // Ireland
  'aib.ie',
  'bankofireland.com',
  'permanenttsb.ie',
  'kbc.ie',
  'ulsterbank.ie',
  'ebs.ie',
  'anchorage.ie',
  'peppergroup.ie',
  'havenmortgages.ie',
  'dilosk.ie',

  // Portugal
  'cgd.pt',
  'millenniumbcp.pt',
  'novobanco.pt',
  'santander.pt',
  'bankinter.pt',
  'bancobic.pt',
  'bancomontepio.pt',
  'eurobic.pt',
  'bbva.pt',
  'bpi.pt',

  // Greece
  'nbg.gr',
  'piraeusbank.gr',
  'eurobank.gr',
  'alpha.gr',
  'atticabank.gr',
  'pancretabank.gr',
  'chaniabank.gr',
  'hsbc.gr',
  'procreditbank.gr',
  'optima.gr',

  // Austria
  'sparkasse.at',
  'raiffeisen.at',
  'erstegroup.com',
  'bankaustria.at',
  'bawagpsk.com',
  'volksbank.at',
  'oberbank.at',
  'hypo.at',
  'schoellerbank.at',
  'ing.at',

  // Poland
  'pkobp.pl',
  'santander.pl',
  'ing.pl',
  'mbank.pl',
  'pekao.com.pl',
  'bnpparibas.pl',
  'getinbank.pl',
  'aliorbank.pl',
  'pocztowy.pl',
  'credit-agricole.pl',

  // Sweden
  'nordea.se',
  'swedbank.se',
  'seb.se',
  'handelsbanken.se',
  'lansforsakringar.se',
  'skandia.se',
  'icabanken.se',
  'avanza.se',
  'collector.se',
  'marginalen.se',

  // Denmark
  'danskebank.dk',
  'nordea.dk',
  'jyskebank.dk',
  'sydbank.dk',
  'nykredit.dk',
  'al-bank.dk',
  'sparnord.dk',
  'banknordik.dk',
  'vestjyskbank.dk',
  'lunar.app',

  // Finland
  'nordea.fi',
  'op.fi',
  'danskebank.fi',
  'aktia.fi',
  'saastopankki.fi',
  'handelsbanken.fi',
  'poppankki.fi',
  'alandsbanken.fi',
  'omasp.fi',
  'spankki.fi',

  // Slovenia
  'nlb.si',
  'nkbm.si',
  'unicreditbank.si',
  'intesasanpaolo.si',
  'sparkasse.si',
  'dbs.si',
  'gbkr.si',
  'lon.si',
  'delavska-hranilnica.si',
  'sberbank.si',

  // Croatia
  'zaba.hr',
  'pbz.hr',
  'erstebank.hr',
  'rba.hr',
  'otpbanka.hr',
  'hpb.hr',
  'addiko.hr',
  'kaba.hr',
  'jtbanka.hr',
  'slatinska-banka.hr',

  // Romania
  'bcr.ro',
  'brd.ro',
  'raiffeisen.ro',
  'cec.ro',
  'intesasanpaolo.ro',
  'unicredit.ro',
  'ing.ro',
  'otpbank.ro',
  'alphabank.ro',
  'librabank.ro',

  // Bulgaria
  'unicreditbulbank.bg',
  'dskbank.bg',
  'postbank.bg',
  'fibank.bg',
  'procreditbank.bg',
  'ccbank.bg',
  'allianz.bg',
  'municipalbank.bg',
  'bbr.bg',
  'tokudabank.bg',

  // Slovakia
  'slsp.sk',
  'vub.sk',
  'tatrabanka.sk',
  'csob.sk',
  'postovabanka.sk',
  'primabanka.sk',
  'jtbanka.sk',
  'otpbanka.sk',
  'unicreditbank.sk',
  'raiffeisen.sk',

  // Hungary
  'otpbank.hu',
  'kh.hu',
  'unicreditbank.hu',
  'raiffeisen.hu',
  'erstebank.hu',
  'mkb.hu',
  'takarekbank.hu',
  'magnetbank.hu',
  'granitbank.hu',
  'budapest.hu',

  // Czech Republic
  'csob.cz',
  'kb.cz',
  'csas.cz',
  'moneta.cz',
  'rb.cz',
  'unicreditbank.cz',
  'fio.cz',
  'airbank.cz',
  'creditas.cz',
  'trinity.cz',

  // Latvia
  'swedbank.lv',
  'seb.lv',
  'citadele.lv',
  'luminor.lv',
  'blueorangebank.com',
  'ribbank.com',
  'signetbank.com',
  'lpb.lv',
  'mtbank.eu',
  'privatbank.lv',

  // Lithuania
  'swedbank.lt',
  'seb.lt',
  'luminor.lt',
  'sb.lt',
  'citadele.lt',
  'medbank.lt',
  'šiauliųbankas.lt',
  'revolut.com/lt',
  'bigbank.lt',
  'fjordbank.lt',

  // Estonia
  'swedbank.ee',
  'seb.ee',
  'luminor.ee',
  'lhv.ee',
  'cooppank.ee',
  'bigbank.ee',
  'inbank.ee',
  'tfbank.ee',
  'citadele.ee',
  'revolut.com/ee',

  // Cyprus
  'bankofcyprus.com',
  'hellenicbank.com',
  'astrobank.com',
  'rcbcy.com',
  'eurobank.com.cy',
  'alphabank.com.cy',
  'ancoriabank.com',
  'kedipes.com.cy',
  'cdb.com.cy',
  'sgbcy.com',

  // Malta
  'bov.com',
  'hsbc.com.mt',
  'apsbank.com.mt',
  'lombardmalta.com',
  'fimbank.com',
  'medirect.com.mt',
  'fcmbank.com.mt',
  'izola-bank.com',
  'agribank.com.mt',
  'bnf.com.mt',

  // Luxembourg
  'bcee.lu',
  'bil.com',
  'bgl.lu',
  'raiffeisen.lu',
  'ing.lu',
  'post.lu',
  'banquedeluxembourg.com',
  'kbl.lu',
  'quintet.com',
  'deutschebank.lu'
];

const africanBankDomains = [
  // South Africa
  "standardbank.co.za",       // Largest bank in Africa by assets
  "absa.co.za",              // Major presence across Africa
  "fnb.co.za",               // First National Bank
  "nedbank.co.za",           // One of South Africa's "Big Four"
  "capitecbank.co.za",       // Large retail bank
  
  // Nigeria
  "gtbank.com",              // Guaranty Trust Bank
  "zenithbank.com",          // One of Nigeria's largest
  "accessbankplc.com",       // Major presence in multiple African countries
  "firstbanknigeria.com",    // First Bank of Nigeria
  "ubagroup.com",            // United Bank for Africa
  
  // Egypt
  "nbe.com.eg",              // National Bank of Egypt
  "cib.com.eg",              // Commercial International Bank
  "banquemisr.com",          // Banque Misr
  "qnb.com.eg",              // Qatar National Bank Alahli
  "arabafricaninternationalbank.com",  // AAIB
  
  // Morocco
  "attijariwafabank.com",    // Largest bank in Morocco
  "bmcebank.ma",             // BMCE Bank
  "groupebcp.com",           // Banque Centrale Populaire
  "creditdumaroc.ma",        // Crédit du Maroc
  
  // Kenya
  "kcbgroup.com",            // Kenya Commercial Bank
  "equitybank.co.ke",        // Equity Bank
  "co-opbank.co.ke",         // Cooperative Bank
  "stanbicbank.co.ke",       // Stanbic Bank Kenya
  
  // Pan-African Banks
  "ecobank.com",             // Present in multiple African countries
  "afreximbank.com"          // African Export-Import Bank
];

export default [...africanBankDomains, ...northAmericanBankDomains, ...southAmericanBankDomains, ...mexicanAndCentralAmericanBankDomains, ...eastAsiaOceaniaBankDomains, ...ukBankDomains, ...euBankDomains];
