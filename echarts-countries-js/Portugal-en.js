(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('Portugal', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Alentejo"},"geometry":{"type":"MultiPolygon","coordinates":[["@@H@PERFMUKDGAELAH"],["@@\\MBKAEFIEONQLEJIFWHKFCBOHIN@TON@JCDEHADKPIHSFAFONIRKHDHEPBJCLFPE@GFCB]CMFIJ@HGGEJERAHC@GRDLHLSLBLEPAHCBEVEHEJALMUU@OGOPOCEBMECIWEBCKMOAGDGF@FKJG@MHK@IGSDILITEJKLCRSHCAIrcHETKGIWgDOHE@QECAKLOCS\\ONOVEDERALBLGXETBFAPIJAHCL@LAFMGSGGHGCIGECWKKDOHI\\GRAbIHJLDbFVHF@TFDD\\@XCZMLI\\I^WFIPSBKNKFMIUGGd_QMIKKSAGGEEKGGAGGIKGKQQOKMGKIIG[MKQIUMHGHAJSAOJAFIECGQ@EICQIO@GGE@MOEIQ[CIOMQBiCEAg[OQCGGKQIYI[MBGMQSOWIGES@]MOMDQMYCC@MCIFMG_BOASESLSFCVDPADGUMIGAGBIGSAMKECGIKMBEIBOMSUS@MDSCMWKBKCYISAODCJCF@FLPFJEBGMUWMDGEKICUCCIJATBPGTM@EP@BCNAJGAGL_LORSHCPUJGVO\\_JAXYHOPYJKHMNM^SJ@LUNMCEDECIDSR[VSDIHABGHAAENU@IJCDIFCPAJQTNNDFJCDRDLOJFHJLARGLFLNDLLBEJNBHCLB`PDILI``T@EIFAJNLDCO@KNDEMQQUMOQGSGC@INKHDJCAGG@@KEGHECII@@IO[DGWOIBE[D_CI@QAMSICMHOIIBCIMUBMFKE[OOJUBBNIDCHIAaNOJKEG@IEGKIBKCAGHCEECULEIMQEKFMAAEOGODMEGLMCCLMCOFIC@EYGIIGCGHSAIBIKE@EGE@EIZSCOFICIGGDGEMCEFQMC@EMKAKIC@KOAAOFYEGAIKOOGIaMGKQIGAIMIQEIGIAKKICGIKCGKKCEEIMMEGKGAEDOBAIEEO@AIHOAEOCCEFKGKCMGCGWBKIBGGHQGOIEHGHUO@EEHCEIDIGEMHGAHMEIIC@UMBGADKKK@IGIQHIEFMHCAIGGAQICOKDGLBBQKDOAEKFMJGFI@WGFIEI@ICWAIFIEUAAHUFAAGUGEIDOEDEAKKGQDKEBGKKGFMDEJMBIK[NCHQEIHEGcAUEMFIGEIIFK@AIIAIDCECIOGKNIB@QEDIAGE@GUIKFEIGGOEGGQEEDFNIA@MOKKDECSDIIDIKGGBCFIAIM[DMOLGFKACQHIECSKADLI@KECHIBGKQEEN[MAJGDICMMGBEHKAFIII[D@IGMJCCGBUREAIKFMMCFO@EEBGMAEDGEMS[[MGGAGISJAFKDMCMDMCIFIASFMAGDK@QAKFGAaNODMAMHIL@HIAULONMBEFKF@FMBCNUHOGEHI@@NAPXJIFOBCDBVMNEBOAGDKCODAHK@GSOE@JKFOKIFM@ADKAQGOAIFCEMDACWCAGQBGIBKIB@IDGBOCGMMUFIGIBAMICiNGFIAQFOCIBEACIODYPE@SP[PGDKHGBEEQIIAS@ICKD[EIUKECQECKDCFBFOJCHQRKCYDIKUJCEI@@FOESHSKGR@NCHGDKA@NEB@JCDQB@FMFOAGCKDK@GH@FE@@NAHFDCJDbFLALDJEJHDDNEFJP@RFF@NGTEDENFHIJOTDDSPDBKPCNHHADHJBJAFFJAPBFFVFLDJANHLFPAJFLDVGNHDFPBJIDANCFENWJCJJLALDD@NDBEJDHFHB^DJNhBLAPFHMZFTBPGX@LALCZGPEXINgNQBMGODCP[TKEQAEPFLLJJ@VZPZVf\\tVrL^bPvRHrDnCEtAHEhIhEVMdM\\M^O\\KRQTWTMJSPcXQPULEJOLAFLFLBVGCMLMNJXYPMRKnSGCFIHSBAJSXWFQJKJFDXLNGHQBJFGJSB@DDRFFJC@INKACJKDDRG@QFCFDFGHBLJZJbFZEdB@GJBJGNAHBbKFJaXEBY\\OLU@KGGBCPBNCPA^BNETAPCN@J\\@LLF@NJDDLJPNDJ^HbDJ@LBCX@NMTG`CJGHBLjZHPZNNTXBVPNRLJAHZNP@LHXH@FTFVdfLAFDHUVBHJRJHRJBNMDaDUEkBC@QLSBKDI@MIOHGBIJKBKPPLBTENFP@NCHNJHNED[AEGOEMCAQQQ@GQ@SHKHMLI@UHGHMTMF@EK]MSIIQ[GGS_CYEWIUiOIAY@UPOCGLOJCHSNKBWGIGYKMAaKIHMBIIBKRC@CUBEXWL@PMRERARGTELW^[VADJTJHVJPRFPRVRLPPDNCPLVNLJDFPEJBPDHHFdFNJXHBFKD[HMB@LZJBFCNJVPJJL@FLHMBKHKDAHiDQBGQFGPAJGEGGASBWGKBGFCHDHNLCHYIKIKdOEI@KHAFDPFBCLJ@F`J\\ARKJMJEJDD^@lEAJGB@PKJOTARDBINOESVQHG@FZEHODWBQCGHAFBPLZBLFLDDBLFHATFFDTJjFRBJIBGCKHELBNJ^KPGFEJBTCFARFF@FNZ@DPPTJFJ^@FCP@L^LNDVRTLX\\lXANNHDRDTAbETDfHRHNB\\Gb@LEN@HMDKJGJDRBBILGHBHEJSAGOKQEKDEDQSM@BKEOIGJKPARDHAHJHFRB@HHFLE`[VZLAHLNCJIJ@FNTNLCHEHVPHHGBGFGPFNMPWFCJNNB\\STE\\@LCdTJBZN@FNNNJHVVD^VbHLFDEGEDCRHr@ZJTDXGR@VFLDNIHIRqX_PINS@IEGDG@QDOPeVYGEDMHEAGTQHO@KFMPAHCLYBITQJCVONBDGJ@PGRD^_VPFJNHBFGNALFPZTLJ\\AFDBQLCL@bEVHAFFH@LLLFHJBJPNDDPLJBLRJLLCHBHCPDLDDvPLLFHLDHAZ@JNHBBNTDDLNHEVIHI@KJICAHIBAJGACFQLCAQJAHSRANCJLLLDGFALDDGLFBBNND@HPBNRHLAFNNCFFNAFPLDLFFJADIXCLGJ@bGHMJANGPEPILANOHALIRGRJFNT\\HHTHZBVLDJLHLHLBLPJPBJFHlJPCHDLXHHEZBJHFJLTFLFPFRJLCNYRKFGNCJ@\\JLFVNVF@NDHHFZLVB`ETL"]],"encodeOffsets":[[[-8955,39385]],[[-7722,40616]]]}},{"type":"Feature","properties":{"name":"Algarve"},"geometry":{"type":"MultiPolygon","coordinates":[["@@CDOKo_qYuWCFTJVNHDFHXHRJLFHALHNNHHRBFE"],["@@MCyYJNXFDDTHNA"],["@@YEcDiLP@\\ERBNARFJI"],["@@[UeSIAJRLFHTFFJHBHERBJFBJJAJFRF"],["@@iUo]KCIBEJBJREDJLABFPBFFJ@FFXJRB"],["@@@EHGL@LCHDPBNE@ERADC@IFA@MLBHCDG@MHQTLTGPF@EJ@DFVIJLZCLDRQDGPIAEDELCFDDRLFJV\\FLCJDT@JBRJFFHALGHC\\OTOF@ZOPCDJFBJAPDREJBHEjMJDBNJAJHVENNDHAPCH@JJAALHJRABHXDBDNCDFJEPBRHLBBCN@JEPLLE@IPFHTL@BGPCLDHCPBFANMAUDCPAJEWIBO@MJ@FGPHVGDMNA@ELEFENAPMVKJB@GJKNGNBPCbMHBLERBL@HCNBTEJBJENDNCNDLCBETIHJHBNH\\\\NTHFFCNBAHFFP@DENNLEBJQFAVDHIDHN@J\\CJJEJLBFGHANNJDHCBI\\NFMRFHLJADGLFJ@CKLBDTJFRGBDELKHNP\\CJNJBDEHALHCJJJTCFDLCPL@NJBEMFCRFHHPFHHFJLEVJ@HHFJBFC@RJALMPHDJDFJCJBBJL@JEFJJHNEVFdBFHJGRFDG\\MJLNAFINCHELLAHLFRCLHBLCFPFJCHFHVBBVEBGVBJFJEXBJDJ@JFHEFEPANBHI@MBILOJGNALEFIIIAQFSPODICOAMDKHGPKCGWAEEBGVKHELOHoBKEOKM@IJUBQEMBQJSBMHIRUAIQUAIBOXONWBKAUDMHiNQPOMEEJMDgJ[B_@WAO_KMGUG@HOCaIUIIGMCICQE[O@COKKCIEEKMMY@WGIEeUUGGGQGEOICKHMMQICEUGEIYGACOAYB[MIEIDQAEEI@ECWAICQAFKGGQGLAFMEGSIBGEEUAQRGFSF@J[FEHGBMHGLWLBKOWMCOBcTWHAEOFa^OGk\\kX_P_L]HV]JKBWCQBUCEEQBGEcHKAQKUCQGeAOHk\\WJYJ_DaKQKaAMEKBUCCBO@OJWBKHMDI@SFU@]LAFMCEB@NKDO@eDOEIAMHUDSDYAsGUEOIQMBOEKFKEIQHOD]AU@SDM@SGOKSGO@[CACKAEGEAMFY@EAW@SEKA_MCKGGI@KDCCcEGEEIKIEIKCK@QEEKBGHAIIMDIAKIBKGBAHHJALGBOXKJGC[DOMEHVZJNELDLXT@FLDDJ@HCFJVJFfdPZFFBLHDBJJPAFJFAJFBFJ@LMHBHEHHNQJLHR@NNJRLLLZHHLRTpAHGLAHBPCJQ@DJANFHINBFJBHFJRVXBHF@DLHFPXBLHHXfFPLRBJATFJRR"]],"encodeOffsets":[[[-7798,38003]],[[-7747,38035]],[[-8059,37852]],[[-7988,37896]],[[-7935,37929]],[[-9007,38342]]]}},{"type":"Feature","properties":{"name":"Azores"},"geometry":{"type":"MultiPolygon","coordinates":[["@@HPBJPBFDBHLDJCHHL@\\KFDFHLAHGNDFDBLLELHFANFHERERBFJHAJGDKCEFIGE@KDEJBPKVS@GFCN@@EHEIGBINSGO@IODEFKCWC[DOEEBGJIDGHAJOJQDQAEDUOEDUGGEOLGGKCUL@FGFBHEP@JQZEH"],["@@PJHNJDCHRBPNCLH@ANFDdEFFTJDHNDbIRILCFCTEFGFBLEJANOJEDODELCBOHGBOHEDHNAAGDENARGNALBTGLFNDPIJCHENB@GXENGF@BJLEXBFCJFFCbJNBRHJLRFJFFNFGF@HH@FJA@EFGCGLC@EJCJGJDPGF@BJLENAJHBJLAAMR@DFRANBJLRDJETHHFTBRLRBLDDFLBHHDLPDFGNGJ@HCRBHFFAHFRCPHFI`G\\@JBTBPFZBZENBJCJ@PGPCDCPkBCBSFOOMCMBKHMCOQ]UUMGIC[BQCIIKAOBoRO@OFICS@QCMEMI[EGGKBOI[BCA]AUIKKI@_F[AUBIEOHcKYJMAKCEFWDQGMIUCEBMRSCSRKJKD[PCHcCODIFUAaLM@OMSBCEcCGGMCSAEDYHQJGL[JAFQPWNUHKNO@IRKFAHQDMFIHOFEL_RKHCNKRIRDHGF"],["@@RPFHJBFNCDPLPBLD^E`MHBDGNCPSLWNGBGCEHGNELK@GLSBIGAGKCBQGaFIAEFICKNGACLOBaEMHGJGFAHGHALEJGHOJ@JKB"],["@@HHAFL@FLAFBPCFBVFHLDDHJBHNFDFNGLN@VALBHFH@EKJGBKLETGFEP@HALBFFJBJKAGLK@WRIFMHALBDSCIQGOQ@IHCCEIAGGBODKIQMKAOKAIGFEOEMBQEQ@gFMGK@GF[F@FIHBDINFDEFFHHDKXIFCPHLBJGTIJ"],["@@HTJLBHVHNAPILCBIDCDQAMGIAIKEEEMIMEAEUDDNFDCJMRCR"],["@@BTDHDPHJJFND@HNLLBTH^HNFTAfINHHANAjHXER@VKVANG\\INGJ@DGJDRIAGJELANIDKLMJATDHGLGT@JELBRDJGBILGJCPGBBTENGNODIPBXMPBlCFGXCNBHC\\@dEd@TCFKVGHGLAJMFMAGM@GESAG@ICE@OGODKGEBQASHSBGBiBMDM@GCWFQ@QCCGIEIKQAoSMCYFCD@HG@CJFFKROFODKAWBMCM@OBK@UFSAMBIBWEG@QHaJQJOBU@KKGA_@]VgJKFSHEDOFUJGZOJGNMRARBHCT"],["@@FFJENDLJZFb@RAPFH@NELDRLX\\HLXNX@jKNGDBZKBE\\URCL@XGPKLEROKIGQFWICAGDONOEEW@OICSHADMAIEAEHDLQAKBICKAIDMCUBKC[@QAKCYAWFKFQBELAPCTIXONIBGCO@[NKHQFWPEHEDAJIDAD"],["@@BLJJFTFHHRFHPBDFLBPJXH^DLDRARFPAVDPCHFPCHBDIVBDKZBHNRCTEHBFCRBDCTCH@VIZEJFHAFIJB\\HP@FENCJINENKLCFEJEAIBMHININAIGEGIFIGAIFWN@TOCIDEKOMCCGBIK@ICKGEMBMEICQQAIBGHMGQFQ@SEU@KFK@GHKFSBMEMFOGWHKGKFGEHIBGOEQHJP@JSAEDW@ACWDMCGCEDK@UJUPUHGBGFG@IJKB]TEHY^BFELCPGLAZ"],["@@N@ZETAPENAVERILCdO^E\\IJCVCTIXCHEbCTORCHBHIJAR@TChQ`IRJJQVCVDLI\\MJAVKFETMXAFIhKPINBLQJGJCN@TCTCLGNENEXIJG\\INGF@FEXC\\GLKPAPEHGREPOEMYICCMDO@MCS@cAKAQFMHKBKFMFMNODYNOB[LQHEHKFOHIJ]BCD[JKEO@QDMF_BOBULKL_TEBUJQAYHIAODWLI@CF[JEDKB}\\QDMFGHENIDMEKHGCIDHHBJMHCLCDQFE@OJK@[NGHKFILIDSPMPWR"]],"encodeOffsets":[[[-25790,37873]],[[-26475,38769]],[[-28746,40005]],[[-32019,40399]],[[-31875,40656]],[[-29226,39433]],[[-29526,39528]],[[-28036,39675]],[[-28996,39686]]]}},{"type":"Feature","properties":{"name":"Centro"},"geometry":{"type":"MultiPolygon","coordinates":[["@@nDTDNFHJNEFKEWAMBOPGDICKBGZWBWAKIEPINUX@LCHBXRJNFFPCCI@KGKJIGEBGeQKGFKPEBKDETBOOFKSAMEBGAWHACUPGNANEJ@JGEMKEBCLERCTBDHDLbFDBRFPCLLVCTBBIPITCBHPHCLFLN@JNFFJCFF^DVYZMPGPDJNLBLAFIPGLLVD@GHC@EJOPAHXDJPPCNDDPHHFAHHJFNBJOZGHAJKNpRTMPERM^CZXZPLGVMLAPGVAfLFXMNCJBHIH@HQHGHHL@NHNCPIF@HEDCPBRRHNVLJTJ@JVPXGR@PCTJFCP@@ELKVQHEdHJANHHHR@HBHGFJVPNNCPHFHTPJPAH@FHT@bD\\AKQIIBCMEAIDCZBBAZCNMFBNCNIHKXW\\OPPFDLPHBNNRE^GPBJGBISIZaCEPE\\FbDNCRDLALMISI_AKQQIKIGXQJKXaJ@@HR@FEVC@FENVH^JLDRMHGJML]JIZOBPDZXZVJDHLDXAb@`E@KFINCH@JGAIHATOAEJIREF@HEAGPIJELDHJLHBFNRAJFBZ\\NZADHNDDZAPMHFMLPNDNCFDHAJBNNJHJNNPBNFLBJLEHHT@JJR@JKHQJQ@KDOHCFKDO@FPGJ@RbBNEP@PBFDFPLAPGZCXBHDRCJFTCJDJAZW\\XANTTN@NF\\A^MH@HKDMJG@MI@OFGGAWFCAKRO@APIEMBGEGECG_OGbITB`IFGL@DND\\HBFNXPBFH@HHFNd@rKZ@RFJFZDnNJPRjNNMRTRLDNINA^CRBDKCMNKFQLCLAJIBILIPGBIFGPKFKRENMP]AGJMBKCI@WNIHOPIP@FGTDLYAIFICGFGCMKAIEEDQCJIEIBQAKDAJSAKBGEECMGC@GCKDOCMGQDOACJODKHARUCQDMHGBMFMDKEK@ITKIKAOEIESIOGMKOGEEIGCMQDOAIGEGUVCPEHE^GHGF@GUBQNQ@EDO_KKQAMIMYOIMOYCGNkJ_HMJKPKRIHGACXOJIREHKQGGE@MDKBSGKSG[@MCCGKCCEKAOK[OCEAWFKCKGQQGMCOBUCKGUDOFOAGBMCMBGKBCMMAGGCM@KHQGUCUOKWEQCUIAGGAMJEHAJGCKGEPSCGDIEACIFABMLKDIPKZ@JCZCND@GHCHJNKNDCOTADOLGJGDIB]TC@ELCR@@IGE`WAOPSEGDERCFEEEMCAEDIEMU[LKCIKG@GHK@KAQKEAGSE@CIIFE@GHICKFGIKCKHGCS@KGCAIKISAMKISBGQEGOUGABU@IIK@KS@YEELGDQHEBMKEGK@SEAGUDMCGLEKKCKGEEOEGDICCCUKICQkIeKSCO@_LUAIDqCEEWKOAYFM@KDcFODUCM@UFaFI@[CMCWAKCEGWE]GOKICK@]JYDUFaAQGODOB]JQJ]Hi@aFK@oBYBOGSK_FUAYKGECG@MUEUMKE[II@MDEHQLMZKDQIOEKESEIKGEAIFYGGKWGCODkIEGAIIOKOKAKGKGCIUKYASGGGS[EMQIQHKJGBMPKBOJOFMHIBGNaHI@KHWDCJIBEECKOKBEEMDEMMBEGKMQOA@GMCAMEAHKCCBKHEKCKKDIBMTQBGRIDBRKDEHBBIJABGJDLIJ@JGFUMGCKSCAMGAIMY@GBKCEGKKuOCCCKDOAGDGKKQIAKKICOMCIOIAEGKK@KEGBEUGaFK@KDAREC[BKIYSEOBKHMAEMGEIUO]`QCOHI@CHMAUPIDSRAJKZGDOBEN@LGPSRBHGFCNHFUZOfCP@RCHFH@JMTOJW`QrGJMJKCUEQ@WHSCYIq@QGCDHFCFKEaG]UUCGUMIMM@EYMIAcSKD[@SF[TMAIMEDOXMNOEEHAHGHOGGUGFKDSMEMI@IJMDGKKBUY_\\KFGE@GQAGEGIGBQCOBILJHFPALN@RTFCLCRFPLBHITGFGAKHAJQAICIHCLGNM@KFa@[HMAQGeGSCaFSBQCGCMMWB[kKWQSCUKMK]O@ED]@EISIOO@CMY@EEEBQDEASFIHELOI]AMFKLGHDJAAIEQIiCSEEBSEGAKCCEKAKKYAOBEHGRDXAPCFGEYH@RGTUPFJMCABQPSLI@OHABIkF]@CCFINILIBQI[E_I@DKEACOBELGJ@PFLcGGEOEKIB[RaJI@EKE@CKMDQGIN@LCBOEKJE@WOFQLCCKJGHKBKEKAUOFSAKGAGMAMDONK@KHADOAGMICBEJINCHUDKFEMAQK_@CNGCGFELOJE@UGIHQSKFH`GNG@IDKGAESD@JKCGDMEGE_CGCOACFJBLHCLBDZJHCNDDFAHFRC`IPEFCPQDEEOSGCK@MJOFINGDOCODO@AJKFGCDSKKAKEAEJMDWCMPHH@LKDIFK@KPNFGJDJMBIDYC[TOACCM@AKMEEDBFANINAHFFJVRRV^DLAFNPDJPPR\\VhBPJTLXBNFRFTAPEHDHJfBZCDBJCHIFFHEJGDDJGRQNCJBPCNGNMPGBGEU@UFOFJRPFV@LCFHJECGNGVA\\JHHAJNAPBbPhVfV^VbZXR\\bDBHTHJ@JNBDFVRFJTNDJPDHFNDFAFIPBDHEJMNH@RLJH@FDJFBVRxRRBXCFQDATFTLXRjHRLbDLN\\ALDLCHVlDNLV@FHVDFXhHPP\\FRNVBHVlFLLTDNNZBHRbADRdJRPfThPbL`N\\RdHVABLXTlABHPPhBJDdIB@LG@@NGPQHSNIHOFCPBHPZDJ`L\\JRBHL\\XzRlBJT|FLJ\\FZ\\@NJbFJ@HRjAFTrBNFLDTJXCBHL@HJXRtAHFLCFLbDN@XMFJT@DTtDRRj`@JHRJbL`FNJXBJJ^H^JZADHRJ\\HVHdFTCDFRBVBNHN"],["@@@RLVNNP@XMJILCL@FMS_UIK@WJQBEFCL"]],"encodeOffsets":[[[-8860,41948]],[[-7608,41877]]]}},{"type":"Feature","properties":{"name":"Lisboa"},"geometry":{"type":"MultiPolygon","coordinates":[["@@\\UX]FKHSBQFQNQ@OXKFWVA@DQDALJJNAJGbLNBZLJHXHLATMDGPIHKPDVOZ@JBjPJVFXDZT`HHR\\JJNTL^@FNENSHGVGJ@NKLGTGR@@HRRBRNDPFFH\\BFCGMMIDG@MEOFMASOKLOLAJIHAPGNJJ@LCTARKD@lAVFbCNCAMQIIGIQAGVUCGBEeKUcSE@EWGKGO@YMBGKIMQUOWAMSYMGOiYAKHGDIH_NS@MDWKAI@aC]GCIOMKICCMIE@ICGEILECQBGDCPCRNTIHCTHDEFMECM@KEAMSOGYEENKDKAAKICEI\\OEG@G]GHELARF^@VKOQMBMEAIFKNCAIG@iACHBJHDJB@F]BCEG@ELEEWJWPCHKHQHEC[LADKFcCKEMKIBMIOcQIWBYAEGO@MG@EMOOKQGGBMEUMMDKCECQIOBEIOAWDOFWFI@EEG@@GGEW@EGI@ODCAUBSAMGKKMEAGMGM@SFO@D\\PVJXHBFNJJL`HZB`BfAPKrCHObGNIZIVU`QXQTMRSP@HPBJFHNLCNDjDJBJ@dB`FXJJBFECGHCOMHKLAFKXIXEVAHEJNBHJH^FBJ^JENHB\\BKPDXDTFHNHZJEHAJDDN@PPIAIGOACDV\\DDR@JELCX@jHZJMBWGMHUGBFMBMAOJPZJFRHPC@IHACNNBVAPB@FGDGGYDFDN@BJFFMFCGYEIDHFXHIBKAJNTb"],["@@FCNFBLN@DDPB\\SZDJCNACIHIMELOL@JELC@KGGNOXDNCFIFBBLLLCTHDLEBIP@PCPDHCJMPENIL@HDPTFFRCDOFEJOD_EQBGCEMCGDYIACDKKGIADEPBHD`DHFNFHCLD@ITCBFLHJCH@HMG_LERTJGVHF@PIFKHEHDDM`@RLNBEFCLGVMDIJAFJDHNPBBCLGL@PMNCNBBHLHTBPEBVFLALGLIHDLKDERXPF@LIPFDA@KJMRHNCDLF@FLJ@bI\\QJAFLFPHHLJZJDGMKCGDGHELAXHTAHBFHIHOBEHHRRAjCBGLCLGNAKG@EIKOIIUDMAEYI@KNA\\GLCAEWGMIcEGECGAOFIEOICMKKUDOCMOOQKQUEOOQUIIGISOYY_MKGLCRGLGEMbGEEXKXBPCDQ]QWug[_C]C@A_DIAKECGUMY@EIE_]EAcGEBSCIGUCI@gEeEG@MHM@OF[BWAMAGBYG@C[OI@QQO@_LIAEFKBSNkNIF[DWGEEDEEGK@MDKHeAaPC@QJDPHHFJJZAFBVYVIBAHGDAPIJPT@FFFBJFFFJFBHLJTJVDDRZLZCFPP@LFFL^H\\NTBHFNBLFFBRAJ@JEBAV@LCDHNMTBFEFDHAFFDBJEHBJRhCNBH"]],"encodeOffsets":[[[-9182,39758]],[[-9642,39992]]]}},{"type":"Feature","properties":{"name":"Madeira"},"geometry":{"type":"MultiPolygon","coordinates":[["@@FJAFDHRBLKGEHOO@CDQD"],["@@DD@LHDAWJ[@OFEFMJCNQBEQFGHKNANMXC^"],["@@FPHGDMVQ@GFEDKNMDMPMBSJMDQDI@WGBBHGNCBILATMTKXGHMJKBEFDHCLDBCPGL"],["@@PJXRFLRHLHJLHBLPNFLRJFRATENDHAHKXMDORIHMXOPCR@FBFKVKVBNCF@XGTCLHL@VFV@TLNBRPFBNGJDPCRBJDNBdBPB`HPEDGVAJENSVKLKAILIJ@HKTCJMHE@KHEJBRCDCJ@HEFDR@HIJCJDHCFDRCZCNMH@LFDEPARHHCNADDN@@EL@HGEGGJMFE@CKIEGFEAKDS@SMCBQEEEBEICCKMCEEFEBIQMGSSEM@EEIOEECUGCEIKKKAOOcCICWFKD]FWB_CMEGAGGIAO@@CMACFKJMDUBEHYHOAGDe@QFIHWHMBWJGAMN]HEAIDSAaXMFGJMJK@IJSFqVOFMJIDSJ@HGLWPOVIFGJBTENAHGROJEDGJ"],["@@DHF@LRDQCGFEAGMJKD"],["@@FFLDLNHNHDAPFDEF@FJBBLNBH@HJ\\RTJZFDCJ@HG@CPANFBIKMDGJIKSHKCEKDUBUAMEQKc_MI[QGBAFKHIBAHGF"]],"encodeOffsets":[[[-16255,30866]],[[-16890,33231]],[[-16937,33347]],[[-17680,33602]],[[-16787,33799]],[[-16791,33833]]]}},{"type":"Feature","properties":{"name":"North"},"geometry":{"type":"Polygon","coordinates":["@@QA]DMBMJKCSQNQMMQiIOmMYCIEQEY@qLc@EMGGG@AEWOEMGAC[CMK@EH_JSAaJPHH`FDFHAHFNOJ@BQPBLEDBXHHPEJ@@NIHCNGLG@]N[BMEM@SSBM[WYXIBICSDIEQDGCWAYDOHKBEOECOAO@MFaA@QHIEOP@LCDEPGLCR@RILG@IIQ@IGSFGIKKAMEOAMMGIMIAMBICGDECMOMNKGEONYBCCGMBCMYY[EABIMQAEKGGIKCIFOJBHGFE@QFIJBFSPGBBJIHG@MDEJ@L_Fa@WBKCCGUIWYCYAOYPIJK^INGHQNKC]IUGFM@EUDEFQ@@GI@WbILWRJHJLRRBLJ`JTKNKBQCMDaC[EOFDFYbTJAJIHOA]HQFMMGAKOECOO[PWXGLMJMDEAMNYDABYACDBJNFADJJLR[BaCS@EGG@OBOIGSGEDOMMUOEIGHGAQ@GGMGIBcGGFURKL@FO@EDSIODQ@WHUO@ISIKIMUQGAQDOFC@GJEDOGM@MGKHGRG@GJGAGDINMEWeKUBOHKBUNKHYOYW]DQNOFSNoQLMBIHGPYAIEMGIBGGEOGCCDMOOCIGWOBIP@FGD@HUCKKOHEJKBKAIMOCOHYNUZ]CEEIDEEIMM@EKDKOGAGSDOJAJSAUDKKODQECAaECKCGSAQDKFADLFFNIHI@MFMBOHDVGBBXAHNFTBELPPSACFALOFELLHfRAHHFIJHL@LDJODEEIMWQGAKDW@MVOJJFBLAXYXAHDLCJOHAPBNFXELMFGIMESCmCH\\DVBNCFDPAHFPCR@LO^EDBJE^D`@LEPITBRGJ@JEPFHAHKJMRIH@FIHDHCHOJMNCLIPGHBbCLEBGN@HIHFHDVAHEJBFCRELARIL@HETDbERGFMDCFBFAPGLEBALCHBFONGL@HGH@NIPIHFNDNALHLFX@PDNAZAFMRAJIPDJDNKZDNEV@HCRGR@LITCNC`ENCPMT@NIPENBDD\\AJIPULKCCVCFKJEJQjSbBJGJFF@NL\\BZEPPRDNKHGHARAPDLLFDPIVPNXJFHnlDJLL`HTAPF|`RTBPCRFJVNfR^FLDRLTBNPRHH^APBHHHPFJPHFNFRDdDRFFANGH@VBXAZDdNFFCRBHRFNCXB\\FLAdBVBXAVQT@^PV@HKRDLLJLPDL@PCNGVALLBNDLLFFCTB\\PBF`TLAJEJBFLAJFHPHLALIPAHBHHXFLPAFJBBIJIFMAEIGD[FIFYCKFQAC@QHON@JDVRTHXG^LJBZMTGFMJOHSDgGWMGMEUCGESDKEU]CAgI@MMYGAEGBE[OEIKE@CIKCKKECKIG@MFKACVKFID]LFVAXHDEF[JCC{A[T@PE`KP@FD`BVGBFLBDAZDNJPCbRFJR@VFLEBHHJDRFFLBFF@FHHDNNHPHJARBXIJBLHTDN@@HL\\DHHRALBRFJHA^BHEBKGUFeAOE_GKJGL@NQDAHVDDPD@DRAPHE`L@BDBP@\\HPNPJTAHEJCXAVRdNNATITQT@DGZOlCNBNJVK`BRCSQI@CQECGKBGKCEUBMD@ZHVCZADAPFNDPADD^F\\HTHLJCJKLDHRHVDNUVF^@NBNMEIBOHKHAXKFIKGBCJGGKBGhRLJ@HJBFNFDDNJ@TJTLD@PY^Hh@NCTJHJd@^RNDHF\\FP@HA\\JLJJFHAPBNPJPBPFJAHRLKTAHGBERFFEFJHCJEBDJCNNTHBXALEHHFNVHPE^APIXEXKFQPYFCRAFDPCXLLGVAhBPXhXVCVELSBKNQDANFRE^@PCXCN@VHJJTCVG`BF@RDPdHLApZGZ@bIDQP]RaNEVCNCHBP@^I\\D\\DJVCPBDHPHR@T^BHPILCt_FI@QGIBEQYBEGWICIU`GVANChADKSUHIIGCEFGIGCIFE@GEOEEDEIADIKGFCGE@EGCHIAKIMCIEECIBKEIMCGONCHMBOPEIE@GLECCHGHOCCIHGA@QJMNKNGNADCNGNO\\ITBRFVLX@JR@LJFN@`ILBPCLFVGJA`EhFXExO\\GZKPGHGZMVOTYR[LE`IH@RIJIBINSSKYSKO@OGIKGS[KCGEUAAENUEGSBGGNMQAIGQGCEBKCIQISU@EPMFIKMEAMOQGOBMK@G\\KFGDMGIMD_MUCOFILCLIAIII@QEEM@OPMNBDCEKYK]@QCIIKQ@CNGBEMEOCIKAIBIWKQCUHOKOEIECITIFIGESEKGUAGBGTKBCIKGSKMEGWGEWAIGQ@KH@TIFGEAIIGKL[COIMBKHM@EKCKOCIGKMQGIOIACGHEAGGMK@DIAGGGKCAGEGQIMCSOGMKEOKG@SIEI@MTSBILIGKGC@EMIIWMSQSWQMEAQQG_G[Ck@SBcJKBMFKDMESK"],"encodeOffsets":[[-7097,42015]]}}],"UTF8Encoding":true});}));
