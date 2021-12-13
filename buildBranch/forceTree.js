/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

am4core.useTheme(am4themes_animated);

// Create chart
var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);


// Create series
var series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

// Set data
series.data = [{"name": "Google", "sourceType": "Search Engine", "children": [{"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}, {"name": "Beauty 799", "value": 10, "link": ["Google", "faceresearch.org", "Shanghai Dataset", "XM2VTS", "Flickr"]}, {"name": "DeepFashion", "value": 10, "link": ["Google", "Mogujie", "Forever21"]}, {"name": "IARPA Janus Benchmark C (IJB-C)", "value": 10, "link": ["Google", "Yahoo! Images", "YouTube"]}, {"name": "10K US Faces", "value": 10, "link": ["Google"]}, {"name": "FaceScrub", "value": 10, "link": ["Google"]}, {"name": "VGG Face", "value": 10, "link": ["Google", "Bing"]}, {"name": "MS-COCO", "sourceType": "Prior Dataset", "children": [{"name": "SOBA (Shadow-OBject Association)", "value": 10, "link": ["MS-COCO", "ADE20K", "SBU Captioned Photo Dataset", " \"The Internet\""]}, {"name": "Visual Genome", "sourceType": "Prior Dataset", "children": [{"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}], "link": ["MS-COCO", "YFCC100M"]}, {"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}, {"name": "EMOTIC (EMOTIons in Context)", "value": 10, "link": ["MS-COCO", "ADE20K"]}], "link": ["Google", "Bing"]}, {"name": "INRIA Person", "value": 10, "link": ["Google", "Author's Personal Images", "Graz"]}, {"name": "Hipster Wars", "value": 10, "link": ["Google"]}, {"name": "LARGE AGE-GAP (LAG)", "value": 10, "link": ["Google", "YouTube"]}, {"name": "WIDER FACE", "value": 10, "link": ["Google", "Bing"]}, {"name": "Celebrities in Frontal-Profile (CFP)", "value": 10, "link": ["Google"]}, {"name": "Caltech-101 Object Categories Dataset", "value": 10, "link": ["Google"]}, {"name": "Nis Web-Collected Database", "value": 10, "link": ["Google", "Flickr"]}, {"name": "Tiny Images", "value": 10, "link": ["Google", "Picsearch", "Ask", "Cyrdral", "Webshots", "Altavista", "Flickr"]}, {"name": "CROSS-AGE CELEBRITY DATASET (CACD)", "value": 10, "link": ["Google"]}, {"name": "300 FACES IN-THE-WILD CHALLENGE (300-W)", "value": 10, "link": ["Google"]}, {"name": "FAMILIES IN THE WILD (FIW)", "value": 10, "link": ["Google", "Bing"]}]}, {"name": "Bing", "sourceType": "Search Engine", "children": [{"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}, {"name": "VGG Face", "value": 10, "link": ["Google", "Bing"]}, {"name": "MS-COCO", "sourceType": "Prior Dataset", "children": [{"name": "SOBA (Shadow-OBject Association)", "value": 10, "link": ["MS-COCO", "ADE20K", "SBU Captioned Photo Dataset", " \"The Internet\""]}, {"name": "Visual Genome", "sourceType": "Prior Dataset", "children": [{"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}], "link": ["MS-COCO", "YFCC100M"]}, {"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}, {"name": "EMOTIC (EMOTIons in Context)", "value": 10, "link": ["MS-COCO", "ADE20K"]}], "link": ["Google", "Bing"]}, {"name": "WIDER FACE", "value": 10, "link": ["Google", "Bing"]}, {"name": "MICROSOFT CELEB (MS-CELEB-1M)", "value": 10, "link": ["Bing", " \"The Internet\""]}, {"name": "Yoga-82", "value": 10, "link": ["Bing", "Unnamed Yoga Website"]}, {"name": "FAMILIES IN THE WILD (FIW)", "value": 10, "link": ["Google", "Bing"]}]}, {"name": "Unspecified Search Engine", "sourceType": "Search Engine", "children": [{"name": "KinFaceW", "value": 10, "link": ["Unspecified Search Engine"]}, {"name": "MSR-VTT", "value": 10, "link": ["Unspecified Search Engine"]}]}, {"name": "Picsearch", "sourceType": "Search Engine", "children": [{"name": "Tiny Images", "value": 10, "link": ["Google", "Picsearch", "Ask", "Cyrdral", "Webshots", "Altavista", "Flickr"]}]}, {"name": "Ask", "sourceType": "Search Engine", "children": [{"name": "Tiny Images", "value": 10, "link": ["Google", "Picsearch", "Ask", "Cyrdral", "Webshots", "Altavista", "Flickr"]}]}, {"name": "Baidu", "sourceType": "Search Engine", "children": [{"name": "MALF", "value": 10, "link": ["Baidu", "Flickr"]}]}, {"name": "Yahoo! Images", "sourceType": "Search Engine", "children": [{"name": "IARPA Janus Benchmark C (IJB-C)", "value": 10, "link": ["Google", "Yahoo! Images", "YouTube"]}]}, {"name": "Cyrdral", "sourceType": "Search Engine", "children": [{"name": "Tiny Images", "value": 10, "link": ["Google", "Picsearch", "Ask", "Cyrdral", "Webshots", "Altavista", "Flickr"]}]}, {"name": "Webshots", "sourceType": "Search Engine", "children": [{"name": "Tiny Images", "value": 10, "link": ["Google", "Picsearch", "Ask", "Cyrdral", "Webshots", "Altavista", "Flickr"]}]}, {"name": "Altavista", "sourceType": "Search Engine", "children": [{"name": "Tiny Images", "value": 10, "link": ["Google", "Picsearch", "Ask", "Cyrdral", "Webshots", "Altavista", "Flickr"]}]}, {"name": "YouTube", "sourceType": "Video Sharing Site", "children": [{"name": "Celeb-DF", "value": 10, "link": ["YouTube"]}, {"name": "IARPA Janus Benchmark C (IJB-C)", "value": 10, "link": ["Google", "Yahoo! Images", "YouTube"]}, {"name": "The Mobiface Dataset", "value": 10, "link": ["YouTube"]}, {"name": "HRT TRANSGENDER FACE DATABASE", "value": 10, "link": ["YouTube"]}, {"name": "CrossTask", "value": 10, "link": ["YouTube"]}, {"name": "EVVE dataset", "value": 10, "link": ["YouTube"]}, {"name": "Sports-1M", "value": 10, "link": ["YouTube"]}, {"name": "YT-BB (YouTube-BoundingBoxes)", "value": 10, "link": ["YouTube"]}, {"name": "Kinetics-700", "value": 10, "link": ["YouTube"]}, {"name": "YouTube-VOS", "sourceType": "Prior Dataset", "children": [{"name": "FVI", "value": 10, "link": ["YT-BB (YouTube-BoundingBoxes)\r", "YouTube-VOS"]}], "link": ["YouTube"]}, {"name": "FaceForensics", "value": 10, "link": ["YouTube"]}, {"name": "WWW Crowd", "value": 10, "link": ["YouTube", "Pond5", "GettyImages"]}, {"name": "XD-Violence", "value": 10, "link": ["YouTube", "Movies"]}, {"name": "BAVL (Blind Audio-Visual Localization)", "value": 10, "link": ["YouTube"]}, {"name": "JHMDB (Joint-annotated Human Motion Data Base)", "value": 10, "link": ["YouTube", "Google Videos", "Movies", "Prelinger Archives", " \"The Internet\""]}, {"name": "Penn Action", "value": 10, "link": ["YouTube"]}, {"name": "Win-Fail Action Understanding", "value": 10, "link": ["YouTube"]}, {"name": "UCF101 (UCF101 Human Actions dataset)", "value": 10, "link": ["YouTube"]}, {"name": "HowTo100M", "value": 10, "link": ["YouTube"]}, {"name": "LARGE AGE-GAP (LAG)", "value": 10, "link": ["Google", "YouTube"]}, {"name": "Activity Net", "value": 10, "link": ["YouTube", " \"The Internet\""]}, {"name": "Planned Event Dataset", "value": 10, "link": ["YouTube", "Flickr", "Twitter"]}, {"name": "YouTube-100M", "value": 10, "link": ["YouTube"]}, {"name": "MPII Human Pose", "value": 10, "link": ["YouTube"]}]}, {"name": "TikTok", "sourceType": "Video Sharing Site", "children": [{"name": "TikTok Dataset", "value": 10, "link": ["TikTok"]}]}, {"name": "Vimeo", "sourceType": "Video Sharing Site", "children": [{"name": "Vimeo Creative Commons Collection (V3C)", "value": 10, "link": ["Vimeo"]}]}, {"name": "Google Videos", "sourceType": "Video Sharing Site", "children": [{"name": "JHMDB (Joint-annotated Human Motion Data Base)", "value": 10, "link": ["YouTube", "Google Videos", "Movies", "Prelinger Archives", " \"The Internet\""]}]}, {"name": "locateadoc.com", "sourceType": "Other", "children": [{"name": "IIITD PLASTIC SURGERY FACE DATABASE", "value": 10, "link": ["locateadoc.com", "surgery.org"]}]}, {"name": "rehabs.com", "sourceType": "Other", "children": [{"name": "Illicit Drug Abuse Face Database", "value": 10, "link": ["rehabs.com", "facesofmeth.us"]}]}, {"name": "facesofmeth.us", "sourceType": "Other", "children": [{"name": "Illicit Drug Abuse Face Database", "value": 10, "link": ["rehabs.com", "facesofmeth.us"]}]}, {"name": "surgery.org", "sourceType": "Other", "children": [{"name": "IIITD PLASTIC SURGERY FACE DATABASE", "value": 10, "link": ["locateadoc.com", "surgery.org"]}]}, {"name": "Movies", "sourceType": "Other", "children": [{"name": "Acted Facial Expressions In The Wild (AFEW)", "value": 10, "link": ["Movies"]}, {"name": "XD-Violence", "value": 10, "link": ["YouTube", "Movies"]}, {"name": "JHMDB (Joint-annotated Human Motion Data Base)", "value": 10, "link": ["YouTube", "Google Videos", "Movies", "Prelinger Archives", " \"The Internet\""]}]}, {"name": "Mogujie", "sourceType": "Other", "children": [{"name": "DeepFashion", "value": 10, "link": ["Google", "Mogujie", "Forever21"]}]}, {"name": "Forever21", "sourceType": "Other", "children": [{"name": "DeepFashion", "value": 10, "link": ["Google", "Mogujie", "Forever21"]}]}, {"name": "Paintings", "sourceType": "Other", "children": [{"name": "Abstract Paintings / Artistic Photographs Datasets", "value": 10, "link": ["Paintings", "deviantart", "IAPS"]}]}, {"name": "Author's Personal Images", "sourceType": "Other", "children": [{"name": "INRIA Person", "value": 10, "link": ["Google", "Author's Personal Images", "Graz"]}]}, {"name": "Unnamed Pornography Website(s)", "sourceType": "Other", "children": [{"name": "NPDI Pornography-800", "value": 10, "link": ["Unnamed Pornography Website(s)", "Unspecified Entirely"]}]}, {"name": "Crowdsourced Images", "sourceType": "Other", "children": [{"name": "APPA-REAL", "value": 10, "link": ["Crowdsourced Images", "AgeGuess"]}]}, {"name": "http://memebase.cheezburger.com/totallylookslike", "sourceType": "Other", "children": [{"name": "TLL", "value": 10, "link": ["http://memebase.cheezburger.com/totallylookslike"]}]}, {"name": "faceresearch.org", "sourceType": "Other", "children": [{"name": "Beauty 799", "value": 10, "link": ["Google", "faceresearch.org", "Shanghai Dataset", "XM2VTS", "Flickr"]}]}, {"name": "Unnamed Yoga Website", "sourceType": "Other", "children": [{"name": "Yoga-82", "value": 10, "link": ["Bing", "Unnamed Yoga Website"]}]}, {"name": "deviantart", "sourceType": "Other", "children": [{"name": "Abstract Paintings / Artistic Photographs Datasets", "value": 10, "link": ["Paintings", "deviantart", "IAPS"]}]}, {"name": "Prelinger Archives", "sourceType": "Other", "children": [{"name": "JHMDB (Joint-annotated Human Motion Data Base)", "value": 10, "link": ["YouTube", "Google Videos", "Movies", "Prelinger Archives", " \"The Internet\""]}]}, {"name": "MS-COCO", "sourceType": "Prior Datasets", "children": [{"name": "SOBA (Shadow-OBject Association)", "value": 10, "link": ["MS-COCO", "ADE20K", "SBU Captioned Photo Dataset", " \"The Internet\""]}, {"name": "Visual Genome", "sourceType": "Prior Dataset", "children": [{"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}], "link": ["MS-COCO", "YFCC100M"]}, {"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}, {"name": "EMOTIC (EMOTIons in Context)", "value": 10, "link": ["MS-COCO", "ADE20K"]}]}, {"name": "YFCC100M", "sourceType": "Prior Datasets", "children": [{"name": "MegaFace", "sourceType": "Prior Dataset", "children": [{"name": "DiveFace", "value": 10, "link": ["MegaFace"]}], "link": ["YFCC100M"]}, {"name": "Visual Genome", "sourceType": "Prior Dataset", "children": [{"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}], "link": ["MS-COCO", "YFCC100M"]}, {"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}]}, {"name": "LFW", "sourceType": "Prior Datasets", "children": [{"name": "LABELED FACES IN THE WILD-A (LFW-A)", "value": 10, "link": ["LFW"]}, {"name": "LFWgender", "value": 10, "link": ["LFW"]}]}, {"name": "ADE20K", "sourceType": "Prior Datasets", "children": [{"name": "SOBA (Shadow-OBject Association)", "value": 10, "link": ["MS-COCO", "ADE20K", "SBU Captioned Photo Dataset", " \"The Internet\""]}, {"name": "EMOTIC (EMOTIons in Context)", "value": 10, "link": ["MS-COCO", "ADE20K"]}]}, {"name": "IAPS", "sourceType": "Prior Datasets", "children": [{"name": "Abstract Paintings / Artistic Photographs Datasets", "value": 10, "link": ["Paintings", "deviantart", "IAPS"]}]}, {"name": "SBU Captioned Photo Dataset", "sourceType": "Prior Datasets", "children": [{"name": "SOBA (Shadow-OBject Association)", "value": 10, "link": ["MS-COCO", "ADE20K", "SBU Captioned Photo Dataset", " \"The Internet\""]}]}, {"name": "CelebFaces", "sourceType": "Prior Datasets", "children": [{"name": "CelebA", "value": 10, "link": ["CelebFaces"]}]}, {"name": "Pond5", "sourceType": "Prior Datasets", "children": [{"name": "WWW Crowd", "value": 10, "link": ["YouTube", "Pond5", "GettyImages"]}]}, {"name": "YT-BB (YouTube-BoundingBoxes)\r", "sourceType": "Prior Datasets", "children": [{"name": "FVI", "value": 10, "link": ["YT-BB (YouTube-BoundingBoxes)\r", "YouTube-VOS"]}]}, {"name": "YouTube-VOS", "sourceType": "Prior Datasets", "children": [{"name": "FVI", "value": 10, "link": ["YT-BB (YouTube-BoundingBoxes)\r", "YouTube-VOS"]}]}, {"name": "Video Anomaly Detection Dataset", "sourceType": "Prior Datasets", "children": [{"name": "Gun Detection Dataset", "value": 10, "link": ["Video Anomaly Detection Dataset", "Salido et al. Dataset", "Database-5", "IMFDb"]}]}, {"name": "MegaFace", "sourceType": "Prior Datasets", "children": [{"name": "DiveFace", "value": 10, "link": ["MegaFace"]}]}, {"name": "Visual Genome", "sourceType": "Prior Datasets", "children": [{"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}]}, {"name": "Names and Faces in the News", "sourceType": "Prior Datasets", "children": [{"name": "LFW", "sourceType": "Prior Dataset", "children": [{"name": "LABELED FACES IN THE WILD-A (LFW-A)", "value": 10, "link": ["LFW"]}, {"name": "LFWgender", "value": 10, "link": ["LFW"]}], "link": ["Names and Faces in the News"]}]}, {"name": "Shanghai Dataset", "sourceType": "Prior Datasets", "children": [{"name": "Beauty 799", "value": 10, "link": ["Google", "faceresearch.org", "Shanghai Dataset", "XM2VTS", "Flickr"]}]}, {"name": "PubFig", "sourceType": "Prior Datasets", "children": [{"name": "FAD (Face Attributes Dataset)", "value": 10, "link": ["PubFig"]}]}, {"name": "Salido et al. Dataset", "sourceType": "Prior Datasets", "children": [{"name": "Gun Detection Dataset", "value": 10, "link": ["Video Anomaly Detection Dataset", "Salido et al. Dataset", "Database-5", "IMFDb"]}]}, {"name": "Corel", "sourceType": "Prior Datasets", "children": [{"name": "Berkeley Segmentation Data Set (BSDS300)", "value": 10, "link": ["Corel"]}]}, {"name": "PaperDoll", "sourceType": "Prior Datasets", "children": [{"name": "ModaNet", "value": 10, "link": ["PaperDoll"]}]}, {"name": "Graz", "sourceType": "Prior Datasets", "children": [{"name": "INRIA Person", "value": 10, "link": ["Google", "Author's Personal Images", "Graz"]}]}, {"name": "XM2VTS", "sourceType": "Prior Datasets", "children": [{"name": "Beauty 799", "value": 10, "link": ["Google", "faceresearch.org", "Shanghai Dataset", "XM2VTS", "Flickr"]}]}, {"name": "LVIS", "sourceType": "Prior Datasets", "children": [{"name": "CAMO++", "value": 10, "link": ["LVIS", " \"The Internet\""]}]}, {"name": "PASCAL", "sourceType": "Prior Datasets", "children": [{"name": "Stanford region labeling dataset", "value": 10, "link": ["PASCAL", "Geometric Context (GC)", "MRSC"]}]}, {"name": "University of Notre Dame, Collection B", "sourceType": "Prior Datasets", "children": [{"name": "ND-IIITD Retouched Face Database", "value": 10, "link": ["University of Notre Dame, Collection B", " \"The Internet\""]}]}, {"name": "Geometric Context (GC)", "sourceType": "Prior Datasets", "children": [{"name": "Stanford region labeling dataset", "value": 10, "link": ["PASCAL", "Geometric Context (GC)", "MRSC"]}]}, {"name": "AVA-Plus", "sourceType": "Prior Datasets", "children": [{"name": "DPC-Captions", "value": 10, "link": ["AVA-Plus"]}]}, {"name": "MRSC", "sourceType": "Prior Datasets", "children": [{"name": "Stanford region labeling dataset", "value": 10, "link": ["PASCAL", "Geometric Context (GC)", "MRSC"]}]}, {"name": "MSRA", "sourceType": "Prior Datasets", "children": [{"name": "MSRA10K", "value": 10, "link": ["MSRA"]}]}, {"name": "Database-5", "sourceType": "Prior Datasets", "children": [{"name": "Gun Detection Dataset", "value": 10, "link": ["Video Anomaly Detection Dataset", "Salido et al. Dataset", "Database-5", "IMFDb"]}]}, {"name": "Flickr", "sourceType": "Online Photo Albums", "children": [{"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}, {"name": "Beauty 799", "value": 10, "link": ["Google", "faceresearch.org", "Shanghai Dataset", "XM2VTS", "Flickr"]}, {"name": "HICO (Humans Interacting with Common Objects)", "value": 10, "link": ["Flickr"]}, {"name": "REAL-WORLD AFFECTIVE FACES DATABASE (RAF-DB)", "value": 10, "link": ["Flickr"]}, {"name": "Flickr30k", "value": 10, "link": ["Flickr"]}, {"name": "Humans In 3D (H3D)", "value": 10, "link": ["Flickr"]}, {"name": "Open Images V4", "value": 10, "link": ["Flickr"]}, {"name": "Adience", "value": 10, "link": ["Flickr"]}, {"name": "HELEN DATABASE", "value": 10, "link": ["Flickr"]}, {"name": "MALF", "value": 10, "link": ["Baidu", "Flickr"]}, {"name": "Social Event Dataset (SED)", "value": 10, "link": ["Flickr"]}, {"name": "SBU Captioned Photo Dataset", "sourceType": "Prior Dataset", "children": [{"name": "SOBA (Shadow-OBject Association)", "value": 10, "link": ["MS-COCO", "ADE20K", "SBU Captioned Photo Dataset", " \"The Internet\""]}], "link": ["Flickr"]}, {"name": "YFCC100M", "sourceType": "Prior Dataset", "children": [{"name": "MegaFace", "sourceType": "Prior Dataset", "children": [{"name": "DiveFace", "value": 10, "link": ["MegaFace"]}], "link": ["YFCC100M"]}, {"name": "Visual Genome", "sourceType": "Prior Dataset", "children": [{"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}], "link": ["MS-COCO", "YFCC100M"]}, {"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}], "link": ["Flickr"]}, {"name": "People in Photo Albums (PIPA)", "value": 10, "link": ["Flickr"]}, {"name": "Nis Web-Collected Database", "value": 10, "link": ["Google", "Flickr"]}, {"name": "Planned Event Dataset", "value": 10, "link": ["YouTube", "Flickr", "Twitter"]}, {"name": "Tiny Images", "value": 10, "link": ["Google", "Picsearch", "Ask", "Cyrdral", "Webshots", "Altavista", "Flickr"]}, {"name": "TRI-SUBJECT KINSHIP FACE DATABASE (TSKINFACE)", "value": 10, "link": ["Flickr"]}, {"name": "Leeds Sports Pose", "value": 10, "link": ["Flickr"]}, {"name": "OUI-Audience", "value": 10, "link": ["Flickr"]}, {"name": "PASCAL Visual Object Classes (VOC)", "value": 10, "link": ["Flickr"]}, {"name": "Flickr1024", "value": 10, "link": ["Flickr"]}]}, {"name": "College Campus", "sourceType": "Real World Public Spaces", "children": [{"name": "Market-1501", "value": 10, "link": ["College Campus"]}, {"name": "VIPeR", "value": 10, "link": ["College Campus"]}, {"name": "DukeMTMC-reID", "value": 10, "link": ["College Campus"]}]}, {"name": "Unspecified Real World Space", "sourceType": "Real World Public Spaces", "children": [{"name": "CVC-14", "value": 10, "link": ["Unspecified Real World Space"]}, {"name": "MOT16", "value": 10, "link": ["Unspecified Real World Space"]}, {"name": "PTZ Tracking", "value": 10, "link": ["Unspecified Real World Space"]}]}, {"name": "UAVs", "sourceType": "Real World Public Spaces", "children": [{"name": "UAVDT", "value": 10, "link": ["UAVs"]}]}, {"name": "CCTV Camera Footage", "sourceType": "Real World Public Spaces", "children": [{"name": "i-LIDS", "value": 10, "link": ["CCTV Camera Footage"]}]}, {"name": "Train Station", "sourceType": "Real World Public Spaces", "children": [{"name": "Grand Central Station Dataset", "value": 10, "link": ["Train Station"]}]}, {"name": "Twitter", "sourceType": "Social Media", "children": [{"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}, {"name": "Twitter100k", "value": 10, "link": ["Twitter"]}, {"name": "Planned Event Dataset", "value": 10, "link": ["YouTube", "Flickr", "Twitter"]}]}, {"name": "chictopia", "sourceType": "Social Media", "children": [{"name": "Paper Doll", "value": 10, "link": ["chictopia"]}, {"name": "Fashion144K", "value": 10, "link": ["chictopia"]}]}, {"name": "Tumblr", "sourceType": "Social Media", "children": [{"name": "TGIF", "value": 10, "link": ["Tumblr"]}]}, {"name": "Instagram", "sourceType": "Social Media", "children": [{"name": "PISC (People in Social Context)", "value": 10, "link": ["Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}]}, {"name": "Facebook", "sourceType": "Social Media", "children": [{"name": "FACEBOOK100", "value": 10, "link": ["Facebook"]}]}, {"name": "Unspecified Entirely", "sourceType": "Unknown", "children": [{"name": "NPDI Pornography-800", "value": 10, "link": ["Unnamed Pornography Website(s)", "Unspecified Entirely"]}, {"name": "Pilot Parliaments Benchmark (PPB)", "value": 10, "link": ["Unspecified Entirely"]}, {"name": "FDST (Fudan-ShanghaiTech)", "value": 10, "link": ["Unspecified Entirely"]}, {"name": "Yahoo's Safe for Work (SFW) or Not Safe for Work (NSFW)", "value": 10, "link": ["Unspecified Entirely"]}]}, {"name": " \"The Internet\"", "sourceType": "Unknown", "children": [{"name": "ND-IIITD Retouched Face Database", "value": 10, "link": ["University of Notre Dame, Collection B", " \"The Internet\""]}, {"name": "SOBA (Shadow-OBject Association)", "value": 10, "link": ["MS-COCO", "ADE20K", "SBU Captioned Photo Dataset", " \"The Internet\""]}, {"name": "CAMO++", "value": 10, "link": ["LVIS", " \"The Internet\""]}, {"name": "WhoIsIt (WIT) Face Database", "value": 10, "link": [" \"The Internet\""]}, {"name": "ImageNet", "value": 10, "link": [" \"The Internet\""]}, {"name": "IdentifyMe", "value": 10, "link": [" \"The Internet\""]}, {"name": "SCUT-FBP-A BENCHMARK DATASET FOR FACIAL BEAUTY PERCEPTION", "value": 10, "link": [" \"The Internet\""]}, {"name": "SUN", "value": 10, "link": [" \"The Internet\""]}, {"name": "JHMDB (Joint-annotated Human Motion Data Base)", "value": 10, "link": ["YouTube", "Google Videos", "Movies", "Prelinger Archives", " \"The Internet\""]}, {"name": "IG-1B-Targeted", "value": 10, "link": [" \"The Internet\""]}, {"name": "Family101", "value": 10, "link": [" \"The Internet\""]}, {"name": "Activity Net", "value": 10, "link": ["YouTube", " \"The Internet\""]}, {"name": "RMFD (Real-World Masked Face Dataset)", "value": 10, "link": [" \"The Internet\""]}, {"name": "MICROSOFT CELEB (MS-CELEB-1M)", "value": 10, "link": ["Bing", " \"The Internet\""]}, {"name": "Compaq dataset", "value": 10, "link": [" \"The Internet\""]}, {"name": "Lopes et al. (Image)", "value": 10, "link": [" \"The Internet\""]}]}, {"name": "IMDb", "sourceType": "Informational Websites", "children": [{"name": "CASIA-WEBFACE", "value": 10, "link": ["IMDb"]}, {"name": "IMDB-WIKI", "value": 10, "link": ["IMDb", "Wikipedia"]}]}, {"name": "IMFDb", "sourceType": "Informational Websites", "children": [{"name": "Gun Detection Dataset", "value": 10, "link": ["Video Anomaly Detection Dataset", "Salido et al. Dataset", "Database-5", "IMFDb"]}]}, {"name": "Wikipedia", "sourceType": "Informational Websites", "children": [{"name": "IMDB-WIKI", "value": 10, "link": ["IMDb", "Wikipedia"]}]}, {"name": "Mugshots", "sourceType": "Public Records", "children": [{"name": "NIST MUGSHOT IDENTIFICATION DATABASE (MID)", "value": 10, "link": ["Mugshots"]}, {"name": "MORPH", "value": 10, "link": ["Mugshots"]}]}, {"name": "Yahoo! News", "sourceType": "Public Records", "children": [{"name": "UMass FDDB", "value": 10, "link": ["Yahoo! News"]}]}, {"name": "Hot-or-Not", "sourceType": "User Rating Websites", "children": [{"name": "Hot-Or-Not database", "value": 10, "link": ["Hot-or-Not"]}, {"name": "Gray dataset", "value": 10, "link": ["Hot-or-Not"]}]}, {"name": "AgeGuess", "sourceType": "User Rating Websites", "children": [{"name": "APPA-REAL", "value": 10, "link": ["Crowdsourced Images", "AgeGuess"]}]}, {"name": "Unsplash", "sourceType": "Stock Image Websites ", "children": [{"name": "Unsplash2K", "value": 10, "link": ["Unsplash"]}]}, {"name": "GettyImages", "sourceType": "Stock Image Websites ", "children": [{"name": "WWW Crowd", "value": 10, "link": ["YouTube", "Pond5", "GettyImages"]}]}];

// Set up data fields
series.dataFields.value = "value";
series.dataFields.name = "name";
series.dataFields.children = "children";
series.dataFields.id = "name";
series.dataFields.linkWith = "link";
//series.dataFields.color="sourceType";

// Add labels
series.nodes.template.label.text = "{name}";
series.nodes.template.tooltipText = "[bold]{name}[/]";
series.fontSize = 10;
series.minRadius = 15;
series.maxRadius = 40;
series.centerStrength = 0.5;
series.maxLevels = 2;
