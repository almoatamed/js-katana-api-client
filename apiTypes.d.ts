
import type { AxiosRequestConfig, AxiosResponse } from "axios";
export type Merge<T, U> = T & Omit<U, keyof T>;

export type AsyncEmitOptions = {
    timeout?: number;
    sinceMins?: number;
    now?: boolean;
    quiet?: boolean;
    notScoped?: boolean;
};

export type RequestConfig<D> = {
    sinceMins?: number;
    now?: boolean;
    requestVia?: ("http"|"socket")[]
    quiet?: boolean;
} & AxiosRequestConfig<D>;


type OmitFunctions<T> = T;

        




    


    
    
        






export type OnEventNames = "hello-id" | "hello" | "_433_hello" | "_156_hello" | "_254_hello" | "_378_hello" | "_93_hello" | "_84_hello" | "_102_hello" | "_361_hello" | "_101_hello" | "_175_hello" | "_20_hello" | "_215_hello" | "_220_hello" | "_405_hello" | "_199_hello" | "_442_hello" | "_198_hello" | "_413_hello" | "_216_hello" | "_298_hello" | "_185_hello" | "_160_hello" | "_362_hello" | "_457_hello" | "_72_hello" | "_463_hello" | "_314_hello" | "_449_hello" | "_169_hello" | "_472_hello" | "_458_hello" | "_474_hello" | "_465_hello" | "_272_hello" | "_150_hello" | "_450_hello" | "_487_hello" | "_28_hello" | "_133_hello" | "_143_hello" | "_26_hello" | "_424_hello" | "_455_hello" | "_306_hello" | "_109_hello" | "_98_hello" | "_319_hello" | "_256_hello" | "_219_hello" | "_152_hello" | "_205_hello" | "_131_hello" | "_374_hello" | "_200_hello" | "_207_hello" | "_18_hello" | "_243_hello" | "_312_hello" | "_330_hello" | "_421_hello" | "_153_hello" | "_341_hello" | "_4_hello" | "_480_hello" | "_453_hello" | "_268_hello" | "_142_hello" | "_427_hello" | "_245_hello" | "_127_hello" | "_300_hello" | "_280_hello" | "_60_hello" | "_13_hello" | "_390_hello" | "_135_hello" | "_408_hello" | "_173_hello" | "_425_hello" | "_196_hello" | "_347_hello" | "_409_hello" | "_88_hello" | "_373_hello" | "_253_hello" | "_78_hello" | "_282_hello" | "_294_hello" | "_52_hello" | "_398_hello" | "_170_hello" | "_116_hello" | "_403_hello" | "_190_hello" | "_222_hello" | "_327_hello" | "_154_hello" | "_410_hello" | "_422_hello" | "_415_hello" | "_358_hello" | "_43_hello" | "_492_hello" | "_434_hello" | "_39_hello" | "_122_hello" | "_364_hello" | "_89_hello" | "_372_hello" | "_380_hello" | "_23_hello" | "_251_hello" | "_193_hello" | "_186_hello" | "_428_hello" | "_103_hello" | "_488_hello" | "_17_hello" | "_454_hello" | "_311_hello" | "_42_hello" | "_249_hello" | "_284_hello" | "_86_hello" | "_477_hello" | "_441_hello" | "_414_hello" | "_27_hello" | "_164_hello" | "_320_hello" | "_494_hello" | "_120_hello" | "_107_hello" | "_211_hello" | "_100_hello" | "_92_hello" | "_252_hello" | "_495_hello" | "_387_hello" | "_281_hello" | "_318_hello" | "_83_hello" | "_25_hello" | "_278_hello" | "_79_hello" | "_201_hello" | "_402_hello" | "_119_hello" | "_299_hello" | "_3_hello" | "_462_hello" | "_345_hello" | "_233_hello" | "_82_hello" | "_399_hello" | "_9_hello" | "_7_hello" | "_355_hello" | "_34_hello" | "_334_hello" | "_236_hello" | "_469_hello" | "_388_hello" | "_168_hello" | "_307_hello" | "_407_hello" | "_401_hello" | "_46_hello" | "_269_hello" | "_147_hello" | "_369_hello" | "_171_hello" | "_353_hello" | "_111_hello" | "_417_hello" | "_218_hello" | "_65_hello" | "_177_hello" | "_232_hello" | "_181_hello" | "_338_hello" | "_431_hello" | "_80_hello" | "_31_hello" | "_336_hello" | "_292_hello" | "_110_hello" | "_471_hello" | "_367_hello" | "_490_hello" | "_475_hello" | "_191_hello" | "_340_hello" | "_1_hello" | "_262_hello" | "_187_hello" | "_356_hello" | "_323_hello" | "_326_hello" | "_229_hello" | "_226_hello" | "_90_hello" | "_435_hello" | "_445_hello" | "_95_hello" | "_194_hello" | "_271_hello" | "_137_hello" | "_146_hello" | "_158_hello" | "_188_hello" | "_322_hello" | "_283_hello" | "_126_hello" | "_348_hello" | "_385_hello" | "_315_hello" | "_241_hello" | "_485_hello" | "_32_hello" | "_497_hello" | "_359_hello" | "_316_hello" | "_33_hello" | "_74_hello" | "_416_hello" | "_277_hello" | "_295_hello" | "_178_hello" | "_412_hello" | "_324_hello" | "_148_hello" | "_406_hello" | "_223_hello" | "_11_hello" | "_466_hello" | "_63_hello" | "_35_hello" | "_248_hello" | "_270_hello" | "_263_hello" | "_459_hello" | "_393_hello" | "_426_hello" | "_64_hello" | "_231_hello" | "_489_hello" | "_305_hello" | "_371_hello" | "_344_hello" | "_40_hello" | "_478_hello" | "_349_hello" | "_491_hello" | "_165_hello" | "_6_hello" | "_212_hello" | "_85_hello" | "_128_hello" | "_57_hello" | "_159_hello" | "_461_hello" | "_273_hello" | "_377_hello" | "_444_hello" | "_0_hello" | "_112_hello" | "_214_hello" | "_54_hello" | "_192_hello" | "_10_hello" | "_224_hello" | "_460_hello" | "_5_hello" | "_77_hello" | "_481_hello" | "_195_hello" | "_279_hello" | "_363_hello" | "_386_hello" | "_234_hello" | "_430_hello" | "_346_hello" | "_290_hello" | "_291_hello" | "_288_hello" | "_139_hello" | "_448_hello" | "_296_hello" | "_375_hello" | "_67_hello" | "_91_hello" | "_16_hello" | "_69_hello" | "_157_hello" | "_19_hello" | "_114_hello" | "_235_hello" | "_162_hello" | "_209_hello" | "_370_hello" | "_180_hello" | "_418_hello" | "_331_hello" | "_132_hello" | "_419_hello" | "_397_hello" | "_94_hello" | "_274_hello" | "_115_hello" | "_351_hello" | "_238_hello" | "_206_hello" | "_357_hello" | "_468_hello" | "_167_hello" | "_217_hello" | "_2_hello" | "_144_hello" | "_213_hello" | "_482_hello" | "_22_hello" | "_285_hello" | "_476_hello" | "_440_hello" | "_303_hello" | "_61_hello" | "_395_hello" | "_56_hello" | "_483_hello" | "_496_hello" | "_389_hello" | "_104_hello" | "_304_hello" | "_29_hello" | "_443_hello" | "_337_hello" | "_267_hello" | "_208_hello" | "_189_hello" | "_239_hello" | "_14_hello" | "_354_hello" | "_250_hello" | "_258_hello" | "_479_hello" | "_221_hello" | "_301_hello" | "_183_hello" | "_498_hello" | "_12_hello" | "_286_hello" | "_265_hello" | "_75_hello" | "_96_hello" | "_350_hello" | "_391_hello" | "_51_hello" | "_259_hello" | "_420_hello" | "_117_hello" | "_36_hello" | "_335_hello" | "_113_hello" | "_439_hello" | "_376_hello" | "_261_hello" | "_197_hello" | "_202_hello" | "_451_hello" | "_140_hello" | "_309_hello" | "_392_hello" | "_400_hello" | "_50_hello" | "_436_hello" | "_227_hello" | "_328_hello" | "_360_hello" | "_106_hello" | "_247_hello" | "_48_hello" | "_141_hello" | "_446_hello" | "_365_hello" | "_240_hello" | "_493_hello" | "_105_hello" | "_396_hello" | "_242_hello" | "_447_hello" | "_76_hello" | "_423_hello" | "_473_hello" | "_97_hello" | "_230_hello" | "_264_hello" | "_456_hello" | "_313_hello" | "_136_hello" | "_184_hello" | "_163_hello" | "_228_hello" | "_275_hello" | "_166_hello" | "_108_hello" | "_123_hello" | "_339_hello" | "_411_hello" | "_53_hello" | "_342_hello" | "_204_hello" | "_484_hello" | "_266_hello" | "_15_hello" | "_47_hello" | "_38_hello" | "_467_hello" | "_49_hello" | "_59_hello" | "_366_hello" | "_297_hello" | "_381_hello" | "_121_hello" | "_289_hello" | "_174_hello" | "_352_hello" | "_55_hello" | "_24_hello" | "_332_hello" | "_404_hello" | "_293_hello" | "_437_hello" | "_429_hello" | "_432_hello" | "_151_hello" | "_8_hello" | "_210_hello" | "_138_hello" | "_99_hello" | "_179_hello" | "_58_hello" | "_237_hello" | "_255_hello" | "_244_hello" | "_125_hello" | "_66_hello" | "_499_hello" | "_182_hello" | "_287_hello" | "_310_hello" | "_41_hello" | "_470_hello" | "_203_hello" | "_382_hello" | "_452_hello" | "_486_hello";

export type OnEventBodyMap = {
"hello-id": OmitFunctions<{
  msg: string
}>;
"hello": OmitFunctions<{
  msg: string
}>;
"_433_hello": OmitFunctions<{
  msg: string
}>;
"_156_hello": OmitFunctions<{
  msg: string
}>;
"_254_hello": OmitFunctions<{
  msg: string
}>;
"_378_hello": OmitFunctions<{
  msg: string
}>;
"_93_hello": OmitFunctions<{
  msg: string
}>;
"_84_hello": OmitFunctions<{
  msg: string
}>;
"_102_hello": OmitFunctions<{
  msg: string
}>;
"_361_hello": OmitFunctions<{
  msg: string
}>;
"_101_hello": OmitFunctions<{
  msg: string
}>;
"_175_hello": OmitFunctions<{
  msg: string
}>;
"_20_hello": OmitFunctions<{
  msg: string
}>;
"_215_hello": OmitFunctions<{
  msg: string
}>;
"_220_hello": OmitFunctions<{
  msg: string
}>;
"_405_hello": OmitFunctions<{
  msg: string
}>;
"_199_hello": OmitFunctions<{
  msg: string
}>;
"_442_hello": OmitFunctions<{
  msg: string
}>;
"_198_hello": OmitFunctions<{
  msg: string
}>;
"_413_hello": OmitFunctions<{
  msg: string
}>;
"_216_hello": OmitFunctions<{
  msg: string
}>;
"_298_hello": OmitFunctions<{
  msg: string
}>;
"_185_hello": OmitFunctions<{
  msg: string
}>;
"_160_hello": OmitFunctions<{
  msg: string
}>;
"_362_hello": OmitFunctions<{
  msg: string
}>;
"_457_hello": OmitFunctions<{
  msg: string
}>;
"_72_hello": OmitFunctions<{
  msg: string
}>;
"_463_hello": OmitFunctions<{
  msg: string
}>;
"_314_hello": OmitFunctions<{
  msg: string
}>;
"_449_hello": OmitFunctions<{
  msg: string
}>;
"_169_hello": OmitFunctions<{
  msg: string
}>;
"_472_hello": OmitFunctions<{
  msg: string
}>;
"_458_hello": OmitFunctions<{
  msg: string
}>;
"_474_hello": OmitFunctions<{
  msg: string
}>;
"_465_hello": OmitFunctions<{
  msg: string
}>;
"_272_hello": OmitFunctions<{
  msg: string
}>;
"_150_hello": OmitFunctions<{
  msg: string
}>;
"_450_hello": OmitFunctions<{
  msg: string
}>;
"_487_hello": OmitFunctions<{
  msg: string
}>;
"_28_hello": OmitFunctions<{
  msg: string
}>;
"_133_hello": OmitFunctions<{
  msg: string
}>;
"_143_hello": OmitFunctions<{
  msg: string
}>;
"_26_hello": OmitFunctions<{
  msg: string
}>;
"_424_hello": OmitFunctions<{
  msg: string
}>;
"_455_hello": OmitFunctions<{
  msg: string
}>;
"_306_hello": OmitFunctions<{
  msg: string
}>;
"_109_hello": OmitFunctions<{
  msg: string
}>;
"_98_hello": OmitFunctions<{
  msg: string
}>;
"_319_hello": OmitFunctions<{
  msg: string
}>;
"_256_hello": OmitFunctions<{
  msg: string
}>;
"_219_hello": OmitFunctions<{
  msg: string
}>;
"_152_hello": OmitFunctions<{
  msg: string
}>;
"_205_hello": OmitFunctions<{
  msg: string
}>;
"_131_hello": OmitFunctions<{
  msg: string
}>;
"_374_hello": OmitFunctions<{
  msg: string
}>;
"_200_hello": OmitFunctions<{
  msg: string
}>;
"_207_hello": OmitFunctions<{
  msg: string
}>;
"_18_hello": OmitFunctions<{
  msg: string
}>;
"_243_hello": OmitFunctions<{
  msg: string
}>;
"_312_hello": OmitFunctions<{
  msg: string
}>;
"_330_hello": OmitFunctions<{
  msg: string
}>;
"_421_hello": OmitFunctions<{
  msg: string
}>;
"_153_hello": OmitFunctions<{
  msg: string
}>;
"_341_hello": OmitFunctions<{
  msg: string
}>;
"_4_hello": OmitFunctions<{
  msg: string
}>;
"_480_hello": OmitFunctions<{
  msg: string
}>;
"_453_hello": OmitFunctions<{
  msg: string
}>;
"_268_hello": OmitFunctions<{
  msg: string
}>;
"_142_hello": OmitFunctions<{
  msg: string
}>;
"_427_hello": OmitFunctions<{
  msg: string
}>;
"_245_hello": OmitFunctions<{
  msg: string
}>;
"_127_hello": OmitFunctions<{
  msg: string
}>;
"_300_hello": OmitFunctions<{
  msg: string
}>;
"_280_hello": OmitFunctions<{
  msg: string
}>;
"_60_hello": OmitFunctions<{
  msg: string
}>;
"_13_hello": OmitFunctions<{
  msg: string
}>;
"_390_hello": OmitFunctions<{
  msg: string
}>;
"_135_hello": OmitFunctions<{
  msg: string
}>;
"_408_hello": OmitFunctions<{
  msg: string
}>;
"_173_hello": OmitFunctions<{
  msg: string
}>;
"_425_hello": OmitFunctions<{
  msg: string
}>;
"_196_hello": OmitFunctions<{
  msg: string
}>;
"_347_hello": OmitFunctions<{
  msg: string
}>;
"_409_hello": OmitFunctions<{
  msg: string
}>;
"_88_hello": OmitFunctions<{
  msg: string
}>;
"_373_hello": OmitFunctions<{
  msg: string
}>;
"_253_hello": OmitFunctions<{
  msg: string
}>;
"_78_hello": OmitFunctions<{
  msg: string
}>;
"_282_hello": OmitFunctions<{
  msg: string
}>;
"_294_hello": OmitFunctions<{
  msg: string
}>;
"_52_hello": OmitFunctions<{
  msg: string
}>;
"_398_hello": OmitFunctions<{
  msg: string
}>;
"_170_hello": OmitFunctions<{
  msg: string
}>;
"_116_hello": OmitFunctions<{
  msg: string
}>;
"_403_hello": OmitFunctions<{
  msg: string
}>;
"_190_hello": OmitFunctions<{
  msg: string
}>;
"_222_hello": OmitFunctions<{
  msg: string
}>;
"_327_hello": OmitFunctions<{
  msg: string
}>;
"_154_hello": OmitFunctions<{
  msg: string
}>;
"_410_hello": OmitFunctions<{
  msg: string
}>;
"_422_hello": OmitFunctions<{
  msg: string
}>;
"_415_hello": OmitFunctions<{
  msg: string
}>;
"_358_hello": OmitFunctions<{
  msg: string
}>;
"_43_hello": OmitFunctions<{
  msg: string
}>;
"_492_hello": OmitFunctions<{
  msg: string
}>;
"_434_hello": OmitFunctions<{
  msg: string
}>;
"_39_hello": OmitFunctions<{
  msg: string
}>;
"_122_hello": OmitFunctions<{
  msg: string
}>;
"_364_hello": OmitFunctions<{
  msg: string
}>;
"_89_hello": OmitFunctions<{
  msg: string
}>;
"_372_hello": OmitFunctions<{
  msg: string
}>;
"_380_hello": OmitFunctions<{
  msg: string
}>;
"_23_hello": OmitFunctions<{
  msg: string
}>;
"_251_hello": OmitFunctions<{
  msg: string
}>;
"_193_hello": OmitFunctions<{
  msg: string
}>;
"_186_hello": OmitFunctions<{
  msg: string
}>;
"_428_hello": OmitFunctions<{
  msg: string
}>;
"_103_hello": OmitFunctions<{
  msg: string
}>;
"_488_hello": OmitFunctions<{
  msg: string
}>;
"_17_hello": OmitFunctions<{
  msg: string
}>;
"_454_hello": OmitFunctions<{
  msg: string
}>;
"_311_hello": OmitFunctions<{
  msg: string
}>;
"_42_hello": OmitFunctions<{
  msg: string
}>;
"_249_hello": OmitFunctions<{
  msg: string
}>;
"_284_hello": OmitFunctions<{
  msg: string
}>;
"_86_hello": OmitFunctions<{
  msg: string
}>;
"_477_hello": OmitFunctions<{
  msg: string
}>;
"_441_hello": OmitFunctions<{
  msg: string
}>;
"_414_hello": OmitFunctions<{
  msg: string
}>;
"_27_hello": OmitFunctions<{
  msg: string
}>;
"_164_hello": OmitFunctions<{
  msg: string
}>;
"_320_hello": OmitFunctions<{
  msg: string
}>;
"_494_hello": OmitFunctions<{
  msg: string
}>;
"_120_hello": OmitFunctions<{
  msg: string
}>;
"_107_hello": OmitFunctions<{
  msg: string
}>;
"_211_hello": OmitFunctions<{
  msg: string
}>;
"_100_hello": OmitFunctions<{
  msg: string
}>;
"_92_hello": OmitFunctions<{
  msg: string
}>;
"_252_hello": OmitFunctions<{
  msg: string
}>;
"_495_hello": OmitFunctions<{
  msg: string
}>;
"_387_hello": OmitFunctions<{
  msg: string
}>;
"_281_hello": OmitFunctions<{
  msg: string
}>;
"_318_hello": OmitFunctions<{
  msg: string
}>;
"_83_hello": OmitFunctions<{
  msg: string
}>;
"_25_hello": OmitFunctions<{
  msg: string
}>;
"_278_hello": OmitFunctions<{
  msg: string
}>;
"_79_hello": OmitFunctions<{
  msg: string
}>;
"_201_hello": OmitFunctions<{
  msg: string
}>;
"_402_hello": OmitFunctions<{
  msg: string
}>;
"_119_hello": OmitFunctions<{
  msg: string
}>;
"_299_hello": OmitFunctions<{
  msg: string
}>;
"_3_hello": OmitFunctions<{
  msg: string
}>;
"_462_hello": OmitFunctions<{
  msg: string
}>;
"_345_hello": OmitFunctions<{
  msg: string
}>;
"_233_hello": OmitFunctions<{
  msg: string
}>;
"_82_hello": OmitFunctions<{
  msg: string
}>;
"_399_hello": OmitFunctions<{
  msg: string
}>;
"_9_hello": OmitFunctions<{
  msg: string
}>;
"_7_hello": OmitFunctions<{
  msg: string
}>;
"_355_hello": OmitFunctions<{
  msg: string
}>;
"_34_hello": OmitFunctions<{
  msg: string
}>;
"_334_hello": OmitFunctions<{
  msg: string
}>;
"_236_hello": OmitFunctions<{
  msg: string
}>;
"_469_hello": OmitFunctions<{
  msg: string
}>;
"_388_hello": OmitFunctions<{
  msg: string
}>;
"_168_hello": OmitFunctions<{
  msg: string
}>;
"_307_hello": OmitFunctions<{
  msg: string
}>;
"_407_hello": OmitFunctions<{
  msg: string
}>;
"_401_hello": OmitFunctions<{
  msg: string
}>;
"_46_hello": OmitFunctions<{
  msg: string
}>;
"_269_hello": OmitFunctions<{
  msg: string
}>;
"_147_hello": OmitFunctions<{
  msg: string
}>;
"_369_hello": OmitFunctions<{
  msg: string
}>;
"_171_hello": OmitFunctions<{
  msg: string
}>;
"_353_hello": OmitFunctions<{
  msg: string
}>;
"_111_hello": OmitFunctions<{
  msg: string
}>;
"_417_hello": OmitFunctions<{
  msg: string
}>;
"_218_hello": OmitFunctions<{
  msg: string
}>;
"_65_hello": OmitFunctions<{
  msg: string
}>;
"_177_hello": OmitFunctions<{
  msg: string
}>;
"_232_hello": OmitFunctions<{
  msg: string
}>;
"_181_hello": OmitFunctions<{
  msg: string
}>;
"_338_hello": OmitFunctions<{
  msg: string
}>;
"_431_hello": OmitFunctions<{
  msg: string
}>;
"_80_hello": OmitFunctions<{
  msg: string
}>;
"_31_hello": OmitFunctions<{
  msg: string
}>;
"_336_hello": OmitFunctions<{
  msg: string
}>;
"_292_hello": OmitFunctions<{
  msg: string
}>;
"_110_hello": OmitFunctions<{
  msg: string
}>;
"_471_hello": OmitFunctions<{
  msg: string
}>;
"_367_hello": OmitFunctions<{
  msg: string
}>;
"_490_hello": OmitFunctions<{
  msg: string
}>;
"_475_hello": OmitFunctions<{
  msg: string
}>;
"_191_hello": OmitFunctions<{
  msg: string
}>;
"_340_hello": OmitFunctions<{
  msg: string
}>;
"_1_hello": OmitFunctions<{
  msg: string
}>;
"_262_hello": OmitFunctions<{
  msg: string
}>;
"_187_hello": OmitFunctions<{
  msg: string
}>;
"_356_hello": OmitFunctions<{
  msg: string
}>;
"_323_hello": OmitFunctions<{
  msg: string
}>;
"_326_hello": OmitFunctions<{
  msg: string
}>;
"_229_hello": OmitFunctions<{
  msg: string
}>;
"_226_hello": OmitFunctions<{
  msg: string
}>;
"_90_hello": OmitFunctions<{
  msg: string
}>;
"_435_hello": OmitFunctions<{
  msg: string
}>;
"_445_hello": OmitFunctions<{
  msg: string
}>;
"_95_hello": OmitFunctions<{
  msg: string
}>;
"_194_hello": OmitFunctions<{
  msg: string
}>;
"_271_hello": OmitFunctions<{
  msg: string
}>;
"_137_hello": OmitFunctions<{
  msg: string
}>;
"_146_hello": OmitFunctions<{
  msg: string
}>;
"_158_hello": OmitFunctions<{
  msg: string
}>;
"_188_hello": OmitFunctions<{
  msg: string
}>;
"_322_hello": OmitFunctions<{
  msg: string
}>;
"_283_hello": OmitFunctions<{
  msg: string
}>;
"_126_hello": OmitFunctions<{
  msg: string
}>;
"_348_hello": OmitFunctions<{
  msg: string
}>;
"_385_hello": OmitFunctions<{
  msg: string
}>;
"_315_hello": OmitFunctions<{
  msg: string
}>;
"_241_hello": OmitFunctions<{
  msg: string
}>;
"_485_hello": OmitFunctions<{
  msg: string
}>;
"_32_hello": OmitFunctions<{
  msg: string
}>;
"_497_hello": OmitFunctions<{
  msg: string
}>;
"_359_hello": OmitFunctions<{
  msg: string
}>;
"_316_hello": OmitFunctions<{
  msg: string
}>;
"_33_hello": OmitFunctions<{
  msg: string
}>;
"_74_hello": OmitFunctions<{
  msg: string
}>;
"_416_hello": OmitFunctions<{
  msg: string
}>;
"_277_hello": OmitFunctions<{
  msg: string
}>;
"_295_hello": OmitFunctions<{
  msg: string
}>;
"_178_hello": OmitFunctions<{
  msg: string
}>;
"_412_hello": OmitFunctions<{
  msg: string
}>;
"_324_hello": OmitFunctions<{
  msg: string
}>;
"_148_hello": OmitFunctions<{
  msg: string
}>;
"_406_hello": OmitFunctions<{
  msg: string
}>;
"_223_hello": OmitFunctions<{
  msg: string
}>;
"_11_hello": OmitFunctions<{
  msg: string
}>;
"_466_hello": OmitFunctions<{
  msg: string
}>;
"_63_hello": OmitFunctions<{
  msg: string
}>;
"_35_hello": OmitFunctions<{
  msg: string
}>;
"_248_hello": OmitFunctions<{
  msg: string
}>;
"_270_hello": OmitFunctions<{
  msg: string
}>;
"_263_hello": OmitFunctions<{
  msg: string
}>;
"_459_hello": OmitFunctions<{
  msg: string
}>;
"_393_hello": OmitFunctions<{
  msg: string
}>;
"_426_hello": OmitFunctions<{
  msg: string
}>;
"_64_hello": OmitFunctions<{
  msg: string
}>;
"_231_hello": OmitFunctions<{
  msg: string
}>;
"_489_hello": OmitFunctions<{
  msg: string
}>;
"_305_hello": OmitFunctions<{
  msg: string
}>;
"_371_hello": OmitFunctions<{
  msg: string
}>;
"_344_hello": OmitFunctions<{
  msg: string
}>;
"_40_hello": OmitFunctions<{
  msg: string
}>;
"_478_hello": OmitFunctions<{
  msg: string
}>;
"_349_hello": OmitFunctions<{
  msg: string
}>;
"_491_hello": OmitFunctions<{
  msg: string
}>;
"_165_hello": OmitFunctions<{
  msg: string
}>;
"_6_hello": OmitFunctions<{
  msg: string
}>;
"_212_hello": OmitFunctions<{
  msg: string
}>;
"_85_hello": OmitFunctions<{
  msg: string
}>;
"_128_hello": OmitFunctions<{
  msg: string
}>;
"_57_hello": OmitFunctions<{
  msg: string
}>;
"_159_hello": OmitFunctions<{
  msg: string
}>;
"_461_hello": OmitFunctions<{
  msg: string
}>;
"_273_hello": OmitFunctions<{
  msg: string
}>;
"_377_hello": OmitFunctions<{
  msg: string
}>;
"_444_hello": OmitFunctions<{
  msg: string
}>;
"_0_hello": OmitFunctions<{
  msg: string
}>;
"_112_hello": OmitFunctions<{
  msg: string
}>;
"_214_hello": OmitFunctions<{
  msg: string
}>;
"_54_hello": OmitFunctions<{
  msg: string
}>;
"_192_hello": OmitFunctions<{
  msg: string
}>;
"_10_hello": OmitFunctions<{
  msg: string
}>;
"_224_hello": OmitFunctions<{
  msg: string
}>;
"_460_hello": OmitFunctions<{
  msg: string
}>;
"_5_hello": OmitFunctions<{
  msg: string
}>;
"_77_hello": OmitFunctions<{
  msg: string
}>;
"_481_hello": OmitFunctions<{
  msg: string
}>;
"_195_hello": OmitFunctions<{
  msg: string
}>;
"_279_hello": OmitFunctions<{
  msg: string
}>;
"_363_hello": OmitFunctions<{
  msg: string
}>;
"_386_hello": OmitFunctions<{
  msg: string
}>;
"_234_hello": OmitFunctions<{
  msg: string
}>;
"_430_hello": OmitFunctions<{
  msg: string
}>;
"_346_hello": OmitFunctions<{
  msg: string
}>;
"_290_hello": OmitFunctions<{
  msg: string
}>;
"_291_hello": OmitFunctions<{
  msg: string
}>;
"_288_hello": OmitFunctions<{
  msg: string
}>;
"_139_hello": OmitFunctions<{
  msg: string
}>;
"_448_hello": OmitFunctions<{
  msg: string
}>;
"_296_hello": OmitFunctions<{
  msg: string
}>;
"_375_hello": OmitFunctions<{
  msg: string
}>;
"_67_hello": OmitFunctions<{
  msg: string
}>;
"_91_hello": OmitFunctions<{
  msg: string
}>;
"_16_hello": OmitFunctions<{
  msg: string
}>;
"_69_hello": OmitFunctions<{
  msg: string
}>;
"_157_hello": OmitFunctions<{
  msg: string
}>;
"_19_hello": OmitFunctions<{
  msg: string
}>;
"_114_hello": OmitFunctions<{
  msg: string
}>;
"_235_hello": OmitFunctions<{
  msg: string
}>;
"_162_hello": OmitFunctions<{
  msg: string
}>;
"_209_hello": OmitFunctions<{
  msg: string
}>;
"_370_hello": OmitFunctions<{
  msg: string
}>;
"_180_hello": OmitFunctions<{
  msg: string
}>;
"_418_hello": OmitFunctions<{
  msg: string
}>;
"_331_hello": OmitFunctions<{
  msg: string
}>;
"_132_hello": OmitFunctions<{
  msg: string
}>;
"_419_hello": OmitFunctions<{
  msg: string
}>;
"_397_hello": OmitFunctions<{
  msg: string
}>;
"_94_hello": OmitFunctions<{
  msg: string
}>;
"_274_hello": OmitFunctions<{
  msg: string
}>;
"_115_hello": OmitFunctions<{
  msg: string
}>;
"_351_hello": OmitFunctions<{
  msg: string
}>;
"_238_hello": OmitFunctions<{
  msg: string
}>;
"_206_hello": OmitFunctions<{
  msg: string
}>;
"_357_hello": OmitFunctions<{
  msg: string
}>;
"_468_hello": OmitFunctions<{
  msg: string
}>;
"_167_hello": OmitFunctions<{
  msg: string
}>;
"_217_hello": OmitFunctions<{
  msg: string
}>;
"_2_hello": OmitFunctions<{
  msg: string
}>;
"_144_hello": OmitFunctions<{
  msg: string
}>;
"_213_hello": OmitFunctions<{
  msg: string
}>;
"_482_hello": OmitFunctions<{
  msg: string
}>;
"_22_hello": OmitFunctions<{
  msg: string
}>;
"_285_hello": OmitFunctions<{
  msg: string
}>;
"_476_hello": OmitFunctions<{
  msg: string
}>;
"_440_hello": OmitFunctions<{
  msg: string
}>;
"_303_hello": OmitFunctions<{
  msg: string
}>;
"_61_hello": OmitFunctions<{
  msg: string
}>;
"_395_hello": OmitFunctions<{
  msg: string
}>;
"_56_hello": OmitFunctions<{
  msg: string
}>;
"_483_hello": OmitFunctions<{
  msg: string
}>;
"_496_hello": OmitFunctions<{
  msg: string
}>;
"_389_hello": OmitFunctions<{
  msg: string
}>;
"_104_hello": OmitFunctions<{
  msg: string
}>;
"_304_hello": OmitFunctions<{
  msg: string
}>;
"_29_hello": OmitFunctions<{
  msg: string
}>;
"_443_hello": OmitFunctions<{
  msg: string
}>;
"_337_hello": OmitFunctions<{
  msg: string
}>;
"_267_hello": OmitFunctions<{
  msg: string
}>;
"_208_hello": OmitFunctions<{
  msg: string
}>;
"_189_hello": OmitFunctions<{
  msg: string
}>;
"_239_hello": OmitFunctions<{
  msg: string
}>;
"_14_hello": OmitFunctions<{
  msg: string
}>;
"_354_hello": OmitFunctions<{
  msg: string
}>;
"_250_hello": OmitFunctions<{
  msg: string
}>;
"_258_hello": OmitFunctions<{
  msg: string
}>;
"_479_hello": OmitFunctions<{
  msg: string
}>;
"_221_hello": OmitFunctions<{
  msg: string
}>;
"_301_hello": OmitFunctions<{
  msg: string
}>;
"_183_hello": OmitFunctions<{
  msg: string
}>;
"_498_hello": OmitFunctions<{
  msg: string
}>;
"_12_hello": OmitFunctions<{
  msg: string
}>;
"_286_hello": OmitFunctions<{
  msg: string
}>;
"_265_hello": OmitFunctions<{
  msg: string
}>;
"_75_hello": OmitFunctions<{
  msg: string
}>;
"_96_hello": OmitFunctions<{
  msg: string
}>;
"_350_hello": OmitFunctions<{
  msg: string
}>;
"_391_hello": OmitFunctions<{
  msg: string
}>;
"_51_hello": OmitFunctions<{
  msg: string
}>;
"_259_hello": OmitFunctions<{
  msg: string
}>;
"_420_hello": OmitFunctions<{
  msg: string
}>;
"_117_hello": OmitFunctions<{
  msg: string
}>;
"_36_hello": OmitFunctions<{
  msg: string
}>;
"_335_hello": OmitFunctions<{
  msg: string
}>;
"_113_hello": OmitFunctions<{
  msg: string
}>;
"_439_hello": OmitFunctions<{
  msg: string
}>;
"_376_hello": OmitFunctions<{
  msg: string
}>;
"_261_hello": OmitFunctions<{
  msg: string
}>;
"_197_hello": OmitFunctions<{
  msg: string
}>;
"_202_hello": OmitFunctions<{
  msg: string
}>;
"_451_hello": OmitFunctions<{
  msg: string
}>;
"_140_hello": OmitFunctions<{
  msg: string
}>;
"_309_hello": OmitFunctions<{
  msg: string
}>;
"_392_hello": OmitFunctions<{
  msg: string
}>;
"_400_hello": OmitFunctions<{
  msg: string
}>;
"_50_hello": OmitFunctions<{
  msg: string
}>;
"_436_hello": OmitFunctions<{
  msg: string
}>;
"_227_hello": OmitFunctions<{
  msg: string
}>;
"_328_hello": OmitFunctions<{
  msg: string
}>;
"_360_hello": OmitFunctions<{
  msg: string
}>;
"_106_hello": OmitFunctions<{
  msg: string
}>;
"_247_hello": OmitFunctions<{
  msg: string
}>;
"_48_hello": OmitFunctions<{
  msg: string
}>;
"_141_hello": OmitFunctions<{
  msg: string
}>;
"_446_hello": OmitFunctions<{
  msg: string
}>;
"_365_hello": OmitFunctions<{
  msg: string
}>;
"_240_hello": OmitFunctions<{
  msg: string
}>;
"_493_hello": OmitFunctions<{
  msg: string
}>;
"_105_hello": OmitFunctions<{
  msg: string
}>;
"_396_hello": OmitFunctions<{
  msg: string
}>;
"_242_hello": OmitFunctions<{
  msg: string
}>;
"_447_hello": OmitFunctions<{
  msg: string
}>;
"_76_hello": OmitFunctions<{
  msg: string
}>;
"_423_hello": OmitFunctions<{
  msg: string
}>;
"_473_hello": OmitFunctions<{
  msg: string
}>;
"_97_hello": OmitFunctions<{
  msg: string
}>;
"_230_hello": OmitFunctions<{
  msg: string
}>;
"_264_hello": OmitFunctions<{
  msg: string
}>;
"_456_hello": OmitFunctions<{
  msg: string
}>;
"_313_hello": OmitFunctions<{
  msg: string
}>;
"_136_hello": OmitFunctions<{
  msg: string
}>;
"_184_hello": OmitFunctions<{
  msg: string
}>;
"_163_hello": OmitFunctions<{
  msg: string
}>;
"_228_hello": OmitFunctions<{
  msg: string
}>;
"_275_hello": OmitFunctions<{
  msg: string
}>;
"_166_hello": OmitFunctions<{
  msg: string
}>;
"_108_hello": OmitFunctions<{
  msg: string
}>;
"_123_hello": OmitFunctions<{
  msg: string
}>;
"_339_hello": OmitFunctions<{
  msg: string
}>;
"_411_hello": OmitFunctions<{
  msg: string
}>;
"_53_hello": OmitFunctions<{
  msg: string
}>;
"_342_hello": OmitFunctions<{
  msg: string
}>;
"_204_hello": OmitFunctions<{
  msg: string
}>;
"_484_hello": OmitFunctions<{
  msg: string
}>;
"_266_hello": OmitFunctions<{
  msg: string
}>;
"_15_hello": OmitFunctions<{
  msg: string
}>;
"_47_hello": OmitFunctions<{
  msg: string
}>;
"_38_hello": OmitFunctions<{
  msg: string
}>;
"_467_hello": OmitFunctions<{
  msg: string
}>;
"_49_hello": OmitFunctions<{
  msg: string
}>;
"_59_hello": OmitFunctions<{
  msg: string
}>;
"_366_hello": OmitFunctions<{
  msg: string
}>;
"_297_hello": OmitFunctions<{
  msg: string
}>;
"_381_hello": OmitFunctions<{
  msg: string
}>;
"_121_hello": OmitFunctions<{
  msg: string
}>;
"_289_hello": OmitFunctions<{
  msg: string
}>;
"_174_hello": OmitFunctions<{
  msg: string
}>;
"_352_hello": OmitFunctions<{
  msg: string
}>;
"_55_hello": OmitFunctions<{
  msg: string
}>;
"_24_hello": OmitFunctions<{
  msg: string
}>;
"_332_hello": OmitFunctions<{
  msg: string
}>;
"_404_hello": OmitFunctions<{
  msg: string
}>;
"_293_hello": OmitFunctions<{
  msg: string
}>;
"_437_hello": OmitFunctions<{
  msg: string
}>;
"_429_hello": OmitFunctions<{
  msg: string
}>;
"_432_hello": OmitFunctions<{
  msg: string
}>;
"_151_hello": OmitFunctions<{
  msg: string
}>;
"_8_hello": OmitFunctions<{
  msg: string
}>;
"_210_hello": OmitFunctions<{
  msg: string
}>;
"_138_hello": OmitFunctions<{
  msg: string
}>;
"_99_hello": OmitFunctions<{
  msg: string
}>;
"_179_hello": OmitFunctions<{
  msg: string
}>;
"_58_hello": OmitFunctions<{
  msg: string
}>;
"_237_hello": OmitFunctions<{
  msg: string
}>;
"_255_hello": OmitFunctions<{
  msg: string
}>;
"_244_hello": OmitFunctions<{
  msg: string
}>;
"_125_hello": OmitFunctions<{
  msg: string
}>;
"_66_hello": OmitFunctions<{
  msg: string
}>;
"_499_hello": OmitFunctions<{
  msg: string
}>;
"_182_hello": OmitFunctions<{
  msg: string
}>;
"_287_hello": OmitFunctions<{
  msg: string
}>;
"_310_hello": OmitFunctions<{
  msg: string
}>;
"_41_hello": OmitFunctions<{
  msg: string
}>;
"_470_hello": OmitFunctions<{
  msg: string
}>;
"_203_hello": OmitFunctions<{
  msg: string
}>;
"_382_hello": OmitFunctions<{
  msg: string
}>;
"_452_hello": OmitFunctions<{
  msg: string
}>;
"_486_hello": OmitFunctions<{
  msg: string
}>;
};

export type OnEventExpectedResponseMap = {
"hello-id": OmitFunctions<{
  reply: string
}>;
"hello": OmitFunctions<{
  reply: string
}>;
"_433_hello": OmitFunctions<{
  reply: string
}>;
"_156_hello": OmitFunctions<{
  reply: string
}>;
"_254_hello": OmitFunctions<{
  reply: string
}>;
"_378_hello": OmitFunctions<{
  reply: string
}>;
"_93_hello": OmitFunctions<{
  reply: string
}>;
"_84_hello": OmitFunctions<{
  reply: string
}>;
"_102_hello": OmitFunctions<{
  reply: string
}>;
"_361_hello": OmitFunctions<{
  reply: string
}>;
"_101_hello": OmitFunctions<{
  reply: string
}>;
"_175_hello": OmitFunctions<{
  reply: string
}>;
"_20_hello": OmitFunctions<{
  reply: string
}>;
"_215_hello": OmitFunctions<{
  reply: string
}>;
"_220_hello": OmitFunctions<{
  reply: string
}>;
"_405_hello": OmitFunctions<{
  reply: string
}>;
"_199_hello": OmitFunctions<{
  reply: string
}>;
"_442_hello": OmitFunctions<{
  reply: string
}>;
"_198_hello": OmitFunctions<{
  reply: string
}>;
"_413_hello": OmitFunctions<{
  reply: string
}>;
"_216_hello": OmitFunctions<{
  reply: string
}>;
"_298_hello": OmitFunctions<{
  reply: string
}>;
"_185_hello": OmitFunctions<{
  reply: string
}>;
"_160_hello": OmitFunctions<{
  reply: string
}>;
"_362_hello": OmitFunctions<{
  reply: string
}>;
"_457_hello": OmitFunctions<{
  reply: string
}>;
"_72_hello": OmitFunctions<{
  reply: string
}>;
"_463_hello": OmitFunctions<{
  reply: string
}>;
"_314_hello": OmitFunctions<{
  reply: string
}>;
"_449_hello": OmitFunctions<{
  reply: string
}>;
"_169_hello": OmitFunctions<{
  reply: string
}>;
"_472_hello": OmitFunctions<{
  reply: string
}>;
"_458_hello": OmitFunctions<{
  reply: string
}>;
"_474_hello": OmitFunctions<{
  reply: string
}>;
"_465_hello": OmitFunctions<{
  reply: string
}>;
"_272_hello": OmitFunctions<{
  reply: string
}>;
"_150_hello": OmitFunctions<{
  reply: string
}>;
"_450_hello": OmitFunctions<{
  reply: string
}>;
"_487_hello": OmitFunctions<{
  reply: string
}>;
"_28_hello": OmitFunctions<{
  reply: string
}>;
"_133_hello": OmitFunctions<{
  reply: string
}>;
"_143_hello": OmitFunctions<{
  reply: string
}>;
"_26_hello": OmitFunctions<{
  reply: string
}>;
"_424_hello": OmitFunctions<{
  reply: string
}>;
"_455_hello": OmitFunctions<{
  reply: string
}>;
"_306_hello": OmitFunctions<{
  reply: string
}>;
"_109_hello": OmitFunctions<{
  reply: string
}>;
"_98_hello": OmitFunctions<{
  reply: string
}>;
"_319_hello": OmitFunctions<{
  reply: string
}>;
"_256_hello": OmitFunctions<{
  reply: string
}>;
"_219_hello": OmitFunctions<{
  reply: string
}>;
"_152_hello": OmitFunctions<{
  reply: string
}>;
"_205_hello": OmitFunctions<{
  reply: string
}>;
"_131_hello": OmitFunctions<{
  reply: string
}>;
"_374_hello": OmitFunctions<{
  reply: string
}>;
"_200_hello": OmitFunctions<{
  reply: string
}>;
"_207_hello": OmitFunctions<{
  reply: string
}>;
"_18_hello": OmitFunctions<{
  reply: string
}>;
"_243_hello": OmitFunctions<{
  reply: string
}>;
"_312_hello": OmitFunctions<{
  reply: string
}>;
"_330_hello": OmitFunctions<{
  reply: string
}>;
"_421_hello": OmitFunctions<{
  reply: string
}>;
"_153_hello": OmitFunctions<{
  reply: string
}>;
"_341_hello": OmitFunctions<{
  reply: string
}>;
"_4_hello": OmitFunctions<{
  reply: string
}>;
"_480_hello": OmitFunctions<{
  reply: string
}>;
"_453_hello": OmitFunctions<{
  reply: string
}>;
"_268_hello": OmitFunctions<{
  reply: string
}>;
"_142_hello": OmitFunctions<{
  reply: string
}>;
"_427_hello": OmitFunctions<{
  reply: string
}>;
"_245_hello": OmitFunctions<{
  reply: string
}>;
"_127_hello": OmitFunctions<{
  reply: string
}>;
"_300_hello": OmitFunctions<{
  reply: string
}>;
"_280_hello": OmitFunctions<{
  reply: string
}>;
"_60_hello": OmitFunctions<{
  reply: string
}>;
"_13_hello": OmitFunctions<{
  reply: string
}>;
"_390_hello": OmitFunctions<{
  reply: string
}>;
"_135_hello": OmitFunctions<{
  reply: string
}>;
"_408_hello": OmitFunctions<{
  reply: string
}>;
"_173_hello": OmitFunctions<{
  reply: string
}>;
"_425_hello": OmitFunctions<{
  reply: string
}>;
"_196_hello": OmitFunctions<{
  reply: string
}>;
"_347_hello": OmitFunctions<{
  reply: string
}>;
"_409_hello": OmitFunctions<{
  reply: string
}>;
"_88_hello": OmitFunctions<{
  reply: string
}>;
"_373_hello": OmitFunctions<{
  reply: string
}>;
"_253_hello": OmitFunctions<{
  reply: string
}>;
"_78_hello": OmitFunctions<{
  reply: string
}>;
"_282_hello": OmitFunctions<{
  reply: string
}>;
"_294_hello": OmitFunctions<{
  reply: string
}>;
"_52_hello": OmitFunctions<{
  reply: string
}>;
"_398_hello": OmitFunctions<{
  reply: string
}>;
"_170_hello": OmitFunctions<{
  reply: string
}>;
"_116_hello": OmitFunctions<{
  reply: string
}>;
"_403_hello": OmitFunctions<{
  reply: string
}>;
"_190_hello": OmitFunctions<{
  reply: string
}>;
"_222_hello": OmitFunctions<{
  reply: string
}>;
"_327_hello": OmitFunctions<{
  reply: string
}>;
"_154_hello": OmitFunctions<{
  reply: string
}>;
"_410_hello": OmitFunctions<{
  reply: string
}>;
"_422_hello": OmitFunctions<{
  reply: string
}>;
"_415_hello": OmitFunctions<{
  reply: string
}>;
"_358_hello": OmitFunctions<{
  reply: string
}>;
"_43_hello": OmitFunctions<{
  reply: string
}>;
"_492_hello": OmitFunctions<{
  reply: string
}>;
"_434_hello": OmitFunctions<{
  reply: string
}>;
"_39_hello": OmitFunctions<{
  reply: string
}>;
"_122_hello": OmitFunctions<{
  reply: string
}>;
"_364_hello": OmitFunctions<{
  reply: string
}>;
"_89_hello": OmitFunctions<{
  reply: string
}>;
"_372_hello": OmitFunctions<{
  reply: string
}>;
"_380_hello": OmitFunctions<{
  reply: string
}>;
"_23_hello": OmitFunctions<{
  reply: string
}>;
"_251_hello": OmitFunctions<{
  reply: string
}>;
"_193_hello": OmitFunctions<{
  reply: string
}>;
"_186_hello": OmitFunctions<{
  reply: string
}>;
"_428_hello": OmitFunctions<{
  reply: string
}>;
"_103_hello": OmitFunctions<{
  reply: string
}>;
"_488_hello": OmitFunctions<{
  reply: string
}>;
"_17_hello": OmitFunctions<{
  reply: string
}>;
"_454_hello": OmitFunctions<{
  reply: string
}>;
"_311_hello": OmitFunctions<{
  reply: string
}>;
"_42_hello": OmitFunctions<{
  reply: string
}>;
"_249_hello": OmitFunctions<{
  reply: string
}>;
"_284_hello": OmitFunctions<{
  reply: string
}>;
"_86_hello": OmitFunctions<{
  reply: string
}>;
"_477_hello": OmitFunctions<{
  reply: string
}>;
"_441_hello": OmitFunctions<{
  reply: string
}>;
"_414_hello": OmitFunctions<{
  reply: string
}>;
"_27_hello": OmitFunctions<{
  reply: string
}>;
"_164_hello": OmitFunctions<{
  reply: string
}>;
"_320_hello": OmitFunctions<{
  reply: string
}>;
"_494_hello": OmitFunctions<{
  reply: string
}>;
"_120_hello": OmitFunctions<{
  reply: string
}>;
"_107_hello": OmitFunctions<{
  reply: string
}>;
"_211_hello": OmitFunctions<{
  reply: string
}>;
"_100_hello": OmitFunctions<{
  reply: string
}>;
"_92_hello": OmitFunctions<{
  reply: string
}>;
"_252_hello": OmitFunctions<{
  reply: string
}>;
"_495_hello": OmitFunctions<{
  reply: string
}>;
"_387_hello": OmitFunctions<{
  reply: string
}>;
"_281_hello": OmitFunctions<{
  reply: string
}>;
"_318_hello": OmitFunctions<{
  reply: string
}>;
"_83_hello": OmitFunctions<{
  reply: string
}>;
"_25_hello": OmitFunctions<{
  reply: string
}>;
"_278_hello": OmitFunctions<{
  reply: string
}>;
"_79_hello": OmitFunctions<{
  reply: string
}>;
"_201_hello": OmitFunctions<{
  reply: string
}>;
"_402_hello": OmitFunctions<{
  reply: string
}>;
"_119_hello": OmitFunctions<{
  reply: string
}>;
"_299_hello": OmitFunctions<{
  reply: string
}>;
"_3_hello": OmitFunctions<{
  reply: string
}>;
"_462_hello": OmitFunctions<{
  reply: string
}>;
"_345_hello": OmitFunctions<{
  reply: string
}>;
"_233_hello": OmitFunctions<{
  reply: string
}>;
"_82_hello": OmitFunctions<{
  reply: string
}>;
"_399_hello": OmitFunctions<{
  reply: string
}>;
"_9_hello": OmitFunctions<{
  reply: string
}>;
"_7_hello": OmitFunctions<{
  reply: string
}>;
"_355_hello": OmitFunctions<{
  reply: string
}>;
"_34_hello": OmitFunctions<{
  reply: string
}>;
"_334_hello": OmitFunctions<{
  reply: string
}>;
"_236_hello": OmitFunctions<{
  reply: string
}>;
"_469_hello": OmitFunctions<{
  reply: string
}>;
"_388_hello": OmitFunctions<{
  reply: string
}>;
"_168_hello": OmitFunctions<{
  reply: string
}>;
"_307_hello": OmitFunctions<{
  reply: string
}>;
"_407_hello": OmitFunctions<{
  reply: string
}>;
"_401_hello": OmitFunctions<{
  reply: string
}>;
"_46_hello": OmitFunctions<{
  reply: string
}>;
"_269_hello": OmitFunctions<{
  reply: string
}>;
"_147_hello": OmitFunctions<{
  reply: string
}>;
"_369_hello": OmitFunctions<{
  reply: string
}>;
"_171_hello": OmitFunctions<{
  reply: string
}>;
"_353_hello": OmitFunctions<{
  reply: string
}>;
"_111_hello": OmitFunctions<{
  reply: string
}>;
"_417_hello": OmitFunctions<{
  reply: string
}>;
"_218_hello": OmitFunctions<{
  reply: string
}>;
"_65_hello": OmitFunctions<{
  reply: string
}>;
"_177_hello": OmitFunctions<{
  reply: string
}>;
"_232_hello": OmitFunctions<{
  reply: string
}>;
"_181_hello": OmitFunctions<{
  reply: string
}>;
"_338_hello": OmitFunctions<{
  reply: string
}>;
"_431_hello": OmitFunctions<{
  reply: string
}>;
"_80_hello": OmitFunctions<{
  reply: string
}>;
"_31_hello": OmitFunctions<{
  reply: string
}>;
"_336_hello": OmitFunctions<{
  reply: string
}>;
"_292_hello": OmitFunctions<{
  reply: string
}>;
"_110_hello": OmitFunctions<{
  reply: string
}>;
"_471_hello": OmitFunctions<{
  reply: string
}>;
"_367_hello": OmitFunctions<{
  reply: string
}>;
"_490_hello": OmitFunctions<{
  reply: string
}>;
"_475_hello": OmitFunctions<{
  reply: string
}>;
"_191_hello": OmitFunctions<{
  reply: string
}>;
"_340_hello": OmitFunctions<{
  reply: string
}>;
"_1_hello": OmitFunctions<{
  reply: string
}>;
"_262_hello": OmitFunctions<{
  reply: string
}>;
"_187_hello": OmitFunctions<{
  reply: string
}>;
"_356_hello": OmitFunctions<{
  reply: string
}>;
"_323_hello": OmitFunctions<{
  reply: string
}>;
"_326_hello": OmitFunctions<{
  reply: string
}>;
"_229_hello": OmitFunctions<{
  reply: string
}>;
"_226_hello": OmitFunctions<{
  reply: string
}>;
"_90_hello": OmitFunctions<{
  reply: string
}>;
"_435_hello": OmitFunctions<{
  reply: string
}>;
"_445_hello": OmitFunctions<{
  reply: string
}>;
"_95_hello": OmitFunctions<{
  reply: string
}>;
"_194_hello": OmitFunctions<{
  reply: string
}>;
"_271_hello": OmitFunctions<{
  reply: string
}>;
"_137_hello": OmitFunctions<{
  reply: string
}>;
"_146_hello": OmitFunctions<{
  reply: string
}>;
"_158_hello": OmitFunctions<{
  reply: string
}>;
"_188_hello": OmitFunctions<{
  reply: string
}>;
"_322_hello": OmitFunctions<{
  reply: string
}>;
"_283_hello": OmitFunctions<{
  reply: string
}>;
"_126_hello": OmitFunctions<{
  reply: string
}>;
"_348_hello": OmitFunctions<{
  reply: string
}>;
"_385_hello": OmitFunctions<{
  reply: string
}>;
"_315_hello": OmitFunctions<{
  reply: string
}>;
"_241_hello": OmitFunctions<{
  reply: string
}>;
"_485_hello": OmitFunctions<{
  reply: string
}>;
"_32_hello": OmitFunctions<{
  reply: string
}>;
"_497_hello": OmitFunctions<{
  reply: string
}>;
"_359_hello": OmitFunctions<{
  reply: string
}>;
"_316_hello": OmitFunctions<{
  reply: string
}>;
"_33_hello": OmitFunctions<{
  reply: string
}>;
"_74_hello": OmitFunctions<{
  reply: string
}>;
"_416_hello": OmitFunctions<{
  reply: string
}>;
"_277_hello": OmitFunctions<{
  reply: string
}>;
"_295_hello": OmitFunctions<{
  reply: string
}>;
"_178_hello": OmitFunctions<{
  reply: string
}>;
"_412_hello": OmitFunctions<{
  reply: string
}>;
"_324_hello": OmitFunctions<{
  reply: string
}>;
"_148_hello": OmitFunctions<{
  reply: string
}>;
"_406_hello": OmitFunctions<{
  reply: string
}>;
"_223_hello": OmitFunctions<{
  reply: string
}>;
"_11_hello": OmitFunctions<{
  reply: string
}>;
"_466_hello": OmitFunctions<{
  reply: string
}>;
"_63_hello": OmitFunctions<{
  reply: string
}>;
"_35_hello": OmitFunctions<{
  reply: string
}>;
"_248_hello": OmitFunctions<{
  reply: string
}>;
"_270_hello": OmitFunctions<{
  reply: string
}>;
"_263_hello": OmitFunctions<{
  reply: string
}>;
"_459_hello": OmitFunctions<{
  reply: string
}>;
"_393_hello": OmitFunctions<{
  reply: string
}>;
"_426_hello": OmitFunctions<{
  reply: string
}>;
"_64_hello": OmitFunctions<{
  reply: string
}>;
"_231_hello": OmitFunctions<{
  reply: string
}>;
"_489_hello": OmitFunctions<{
  reply: string
}>;
"_305_hello": OmitFunctions<{
  reply: string
}>;
"_371_hello": OmitFunctions<{
  reply: string
}>;
"_344_hello": OmitFunctions<{
  reply: string
}>;
"_40_hello": OmitFunctions<{
  reply: string
}>;
"_478_hello": OmitFunctions<{
  reply: string
}>;
"_349_hello": OmitFunctions<{
  reply: string
}>;
"_491_hello": OmitFunctions<{
  reply: string
}>;
"_165_hello": OmitFunctions<{
  reply: string
}>;
"_6_hello": OmitFunctions<{
  reply: string
}>;
"_212_hello": OmitFunctions<{
  reply: string
}>;
"_85_hello": OmitFunctions<{
  reply: string
}>;
"_128_hello": OmitFunctions<{
  reply: string
}>;
"_57_hello": OmitFunctions<{
  reply: string
}>;
"_159_hello": OmitFunctions<{
  reply: string
}>;
"_461_hello": OmitFunctions<{
  reply: string
}>;
"_273_hello": OmitFunctions<{
  reply: string
}>;
"_377_hello": OmitFunctions<{
  reply: string
}>;
"_444_hello": OmitFunctions<{
  reply: string
}>;
"_0_hello": OmitFunctions<{
  reply: string
}>;
"_112_hello": OmitFunctions<{
  reply: string
}>;
"_214_hello": OmitFunctions<{
  reply: string
}>;
"_54_hello": OmitFunctions<{
  reply: string
}>;
"_192_hello": OmitFunctions<{
  reply: string
}>;
"_10_hello": OmitFunctions<{
  reply: string
}>;
"_224_hello": OmitFunctions<{
  reply: string
}>;
"_460_hello": OmitFunctions<{
  reply: string
}>;
"_5_hello": OmitFunctions<{
  reply: string
}>;
"_77_hello": OmitFunctions<{
  reply: string
}>;
"_481_hello": OmitFunctions<{
  reply: string
}>;
"_195_hello": OmitFunctions<{
  reply: string
}>;
"_279_hello": OmitFunctions<{
  reply: string
}>;
"_363_hello": OmitFunctions<{
  reply: string
}>;
"_386_hello": OmitFunctions<{
  reply: string
}>;
"_234_hello": OmitFunctions<{
  reply: string
}>;
"_430_hello": OmitFunctions<{
  reply: string
}>;
"_346_hello": OmitFunctions<{
  reply: string
}>;
"_290_hello": OmitFunctions<{
  reply: string
}>;
"_291_hello": OmitFunctions<{
  reply: string
}>;
"_288_hello": OmitFunctions<{
  reply: string
}>;
"_139_hello": OmitFunctions<{
  reply: string
}>;
"_448_hello": OmitFunctions<{
  reply: string
}>;
"_296_hello": OmitFunctions<{
  reply: string
}>;
"_375_hello": OmitFunctions<{
  reply: string
}>;
"_67_hello": OmitFunctions<{
  reply: string
}>;
"_91_hello": OmitFunctions<{
  reply: string
}>;
"_16_hello": OmitFunctions<{
  reply: string
}>;
"_69_hello": OmitFunctions<{
  reply: string
}>;
"_157_hello": OmitFunctions<{
  reply: string
}>;
"_19_hello": OmitFunctions<{
  reply: string
}>;
"_114_hello": OmitFunctions<{
  reply: string
}>;
"_235_hello": OmitFunctions<{
  reply: string
}>;
"_162_hello": OmitFunctions<{
  reply: string
}>;
"_209_hello": OmitFunctions<{
  reply: string
}>;
"_370_hello": OmitFunctions<{
  reply: string
}>;
"_180_hello": OmitFunctions<{
  reply: string
}>;
"_418_hello": OmitFunctions<{
  reply: string
}>;
"_331_hello": OmitFunctions<{
  reply: string
}>;
"_132_hello": OmitFunctions<{
  reply: string
}>;
"_419_hello": OmitFunctions<{
  reply: string
}>;
"_397_hello": OmitFunctions<{
  reply: string
}>;
"_94_hello": OmitFunctions<{
  reply: string
}>;
"_274_hello": OmitFunctions<{
  reply: string
}>;
"_115_hello": OmitFunctions<{
  reply: string
}>;
"_351_hello": OmitFunctions<{
  reply: string
}>;
"_238_hello": OmitFunctions<{
  reply: string
}>;
"_206_hello": OmitFunctions<{
  reply: string
}>;
"_357_hello": OmitFunctions<{
  reply: string
}>;
"_468_hello": OmitFunctions<{
  reply: string
}>;
"_167_hello": OmitFunctions<{
  reply: string
}>;
"_217_hello": OmitFunctions<{
  reply: string
}>;
"_2_hello": OmitFunctions<{
  reply: string
}>;
"_144_hello": OmitFunctions<{
  reply: string
}>;
"_213_hello": OmitFunctions<{
  reply: string
}>;
"_482_hello": OmitFunctions<{
  reply: string
}>;
"_22_hello": OmitFunctions<{
  reply: string
}>;
"_285_hello": OmitFunctions<{
  reply: string
}>;
"_476_hello": OmitFunctions<{
  reply: string
}>;
"_440_hello": OmitFunctions<{
  reply: string
}>;
"_303_hello": OmitFunctions<{
  reply: string
}>;
"_61_hello": OmitFunctions<{
  reply: string
}>;
"_395_hello": OmitFunctions<{
  reply: string
}>;
"_56_hello": OmitFunctions<{
  reply: string
}>;
"_483_hello": OmitFunctions<{
  reply: string
}>;
"_496_hello": OmitFunctions<{
  reply: string
}>;
"_389_hello": OmitFunctions<{
  reply: string
}>;
"_104_hello": OmitFunctions<{
  reply: string
}>;
"_304_hello": OmitFunctions<{
  reply: string
}>;
"_29_hello": OmitFunctions<{
  reply: string
}>;
"_443_hello": OmitFunctions<{
  reply: string
}>;
"_337_hello": OmitFunctions<{
  reply: string
}>;
"_267_hello": OmitFunctions<{
  reply: string
}>;
"_208_hello": OmitFunctions<{
  reply: string
}>;
"_189_hello": OmitFunctions<{
  reply: string
}>;
"_239_hello": OmitFunctions<{
  reply: string
}>;
"_14_hello": OmitFunctions<{
  reply: string
}>;
"_354_hello": OmitFunctions<{
  reply: string
}>;
"_250_hello": OmitFunctions<{
  reply: string
}>;
"_258_hello": OmitFunctions<{
  reply: string
}>;
"_479_hello": OmitFunctions<{
  reply: string
}>;
"_221_hello": OmitFunctions<{
  reply: string
}>;
"_301_hello": OmitFunctions<{
  reply: string
}>;
"_183_hello": OmitFunctions<{
  reply: string
}>;
"_498_hello": OmitFunctions<{
  reply: string
}>;
"_12_hello": OmitFunctions<{
  reply: string
}>;
"_286_hello": OmitFunctions<{
  reply: string
}>;
"_265_hello": OmitFunctions<{
  reply: string
}>;
"_75_hello": OmitFunctions<{
  reply: string
}>;
"_96_hello": OmitFunctions<{
  reply: string
}>;
"_350_hello": OmitFunctions<{
  reply: string
}>;
"_391_hello": OmitFunctions<{
  reply: string
}>;
"_51_hello": OmitFunctions<{
  reply: string
}>;
"_259_hello": OmitFunctions<{
  reply: string
}>;
"_420_hello": OmitFunctions<{
  reply: string
}>;
"_117_hello": OmitFunctions<{
  reply: string
}>;
"_36_hello": OmitFunctions<{
  reply: string
}>;
"_335_hello": OmitFunctions<{
  reply: string
}>;
"_113_hello": OmitFunctions<{
  reply: string
}>;
"_439_hello": OmitFunctions<{
  reply: string
}>;
"_376_hello": OmitFunctions<{
  reply: string
}>;
"_261_hello": OmitFunctions<{
  reply: string
}>;
"_197_hello": OmitFunctions<{
  reply: string
}>;
"_202_hello": OmitFunctions<{
  reply: string
}>;
"_451_hello": OmitFunctions<{
  reply: string
}>;
"_140_hello": OmitFunctions<{
  reply: string
}>;
"_309_hello": OmitFunctions<{
  reply: string
}>;
"_392_hello": OmitFunctions<{
  reply: string
}>;
"_400_hello": OmitFunctions<{
  reply: string
}>;
"_50_hello": OmitFunctions<{
  reply: string
}>;
"_436_hello": OmitFunctions<{
  reply: string
}>;
"_227_hello": OmitFunctions<{
  reply: string
}>;
"_328_hello": OmitFunctions<{
  reply: string
}>;
"_360_hello": OmitFunctions<{
  reply: string
}>;
"_106_hello": OmitFunctions<{
  reply: string
}>;
"_247_hello": OmitFunctions<{
  reply: string
}>;
"_48_hello": OmitFunctions<{
  reply: string
}>;
"_141_hello": OmitFunctions<{
  reply: string
}>;
"_446_hello": OmitFunctions<{
  reply: string
}>;
"_365_hello": OmitFunctions<{
  reply: string
}>;
"_240_hello": OmitFunctions<{
  reply: string
}>;
"_493_hello": OmitFunctions<{
  reply: string
}>;
"_105_hello": OmitFunctions<{
  reply: string
}>;
"_396_hello": OmitFunctions<{
  reply: string
}>;
"_242_hello": OmitFunctions<{
  reply: string
}>;
"_447_hello": OmitFunctions<{
  reply: string
}>;
"_76_hello": OmitFunctions<{
  reply: string
}>;
"_423_hello": OmitFunctions<{
  reply: string
}>;
"_473_hello": OmitFunctions<{
  reply: string
}>;
"_97_hello": OmitFunctions<{
  reply: string
}>;
"_230_hello": OmitFunctions<{
  reply: string
}>;
"_264_hello": OmitFunctions<{
  reply: string
}>;
"_456_hello": OmitFunctions<{
  reply: string
}>;
"_313_hello": OmitFunctions<{
  reply: string
}>;
"_136_hello": OmitFunctions<{
  reply: string
}>;
"_184_hello": OmitFunctions<{
  reply: string
}>;
"_163_hello": OmitFunctions<{
  reply: string
}>;
"_228_hello": OmitFunctions<{
  reply: string
}>;
"_275_hello": OmitFunctions<{
  reply: string
}>;
"_166_hello": OmitFunctions<{
  reply: string
}>;
"_108_hello": OmitFunctions<{
  reply: string
}>;
"_123_hello": OmitFunctions<{
  reply: string
}>;
"_339_hello": OmitFunctions<{
  reply: string
}>;
"_411_hello": OmitFunctions<{
  reply: string
}>;
"_53_hello": OmitFunctions<{
  reply: string
}>;
"_342_hello": OmitFunctions<{
  reply: string
}>;
"_204_hello": OmitFunctions<{
  reply: string
}>;
"_484_hello": OmitFunctions<{
  reply: string
}>;
"_266_hello": OmitFunctions<{
  reply: string
}>;
"_15_hello": OmitFunctions<{
  reply: string
}>;
"_47_hello": OmitFunctions<{
  reply: string
}>;
"_38_hello": OmitFunctions<{
  reply: string
}>;
"_467_hello": OmitFunctions<{
  reply: string
}>;
"_49_hello": OmitFunctions<{
  reply: string
}>;
"_59_hello": OmitFunctions<{
  reply: string
}>;
"_366_hello": OmitFunctions<{
  reply: string
}>;
"_297_hello": OmitFunctions<{
  reply: string
}>;
"_381_hello": OmitFunctions<{
  reply: string
}>;
"_121_hello": OmitFunctions<{
  reply: string
}>;
"_289_hello": OmitFunctions<{
  reply: string
}>;
"_174_hello": OmitFunctions<{
  reply: string
}>;
"_352_hello": OmitFunctions<{
  reply: string
}>;
"_55_hello": OmitFunctions<{
  reply: string
}>;
"_24_hello": OmitFunctions<{
  reply: string
}>;
"_332_hello": OmitFunctions<{
  reply: string
}>;
"_404_hello": OmitFunctions<{
  reply: string
}>;
"_293_hello": OmitFunctions<{
  reply: string
}>;
"_437_hello": OmitFunctions<{
  reply: string
}>;
"_429_hello": OmitFunctions<{
  reply: string
}>;
"_432_hello": OmitFunctions<{
  reply: string
}>;
"_151_hello": OmitFunctions<{
  reply: string
}>;
"_8_hello": OmitFunctions<{
  reply: string
}>;
"_210_hello": OmitFunctions<{
  reply: string
}>;
"_138_hello": OmitFunctions<{
  reply: string
}>;
"_99_hello": OmitFunctions<{
  reply: string
}>;
"_179_hello": OmitFunctions<{
  reply: string
}>;
"_58_hello": OmitFunctions<{
  reply: string
}>;
"_237_hello": OmitFunctions<{
  reply: string
}>;
"_255_hello": OmitFunctions<{
  reply: string
}>;
"_244_hello": OmitFunctions<{
  reply: string
}>;
"_125_hello": OmitFunctions<{
  reply: string
}>;
"_66_hello": OmitFunctions<{
  reply: string
}>;
"_499_hello": OmitFunctions<{
  reply: string
}>;
"_182_hello": OmitFunctions<{
  reply: string
}>;
"_287_hello": OmitFunctions<{
  reply: string
}>;
"_310_hello": OmitFunctions<{
  reply: string
}>;
"_41_hello": OmitFunctions<{
  reply: string
}>;
"_470_hello": OmitFunctions<{
  reply: string
}>;
"_203_hello": OmitFunctions<{
  reply: string
}>;
"_382_hello": OmitFunctions<{
  reply: string
}>;
"_452_hello": OmitFunctions<{
  reply: string
}>;
"_486_hello": OmitFunctions<{
  reply: string
}>;
};

export type OnEventBody<U extends string> = U extends keyof OnEventBodyMap ? OnEventBodyMap[U] : any;

export type OnEventExpectedResponse<U extends string> = U extends keyof OnEventExpectedResponseMap ? OnEventExpectedResponseMap[U] : undefined;

export type OnEvent = <U extends OnEventNames | string>(
    event: U,
    cb: (
            body: OnEventBody<U>,  
            cb: OnEventExpectedResponse<U> extends never ? never : OnEventExpectedResponse<U> extends undefined ? (((body?: any) => Promise<void>) | undefined) : ((body?: OnEventExpectedResponse<U>) => Promise<void>)
        ) => any | Promise<any>
) => Promise<() => void>;



    
export type AsyncEmitEvents = [key: `x/${string}`] | "" | "mocks/_433/_433/_433/_433/_433/_433/_433/_433/_433" | "mocks/_156" | "mocks/_254/_254/_254/_254" | "mocks/_378/_378/_378/_378/_378/_378/_378/_378/_378" | "mocks/_93/_93/_93/_93/_93/_93" | "mocks/_84/_84/_84/_84/_84/_84/_84/_84/_84" | "mocks/_102/_102/_102/_102/_102" | "mocks/_361/_361/_361" | "mocks/_175/_175/_175/_175/_175/_175/_175/_175" | "mocks/_20/_20/_20/_20" | "mocks/_215/_215/_215/_215/_215" | "mocks/_220/_220/_220/_220/_220/_220/_220/_220/_220" | "mocks/_405" | "mocks/_199/_199/_199" | "mocks/_442/_442/_442/_442/_442/_442/_442/_442/_442" | "mocks/_198/_198/_198/_198/_198/_198" | "mocks/_413/_413/_413/_413/_413/_413/_413" | "mocks/_216/_216/_216/_216" | "mocks/_298/_298/_298/_298/_298/_298/_298" | "mocks/_185/_185/_185/_185/_185" | "mocks/_160/_160/_160" | "mocks/_362/_362/_362" | "mocks/_457/_457/_457/_457/_457/_457/_457/_457" | "mocks/_72/_72" | "mocks/_463/_463/_463/_463" | "mocks/_314/_314/_314/_314" | "mocks/_449/_449/_449/_449/_449/_449/_449" | "mocks/_169/_169" | "mocks/_472/_472/_472/_472/_472/_472/_472" | "mocks/_458/_458/_458/_458/_458/_458/_458" | "mocks/_474/_474/_474/_474/_474/_474" | "mocks/_465/_465/_465/_465/_465/_465/_465/_465/_465" | "mocks/_272/_272/_272/_272/_272/_272/_272" | "mocks/_150/_150/_150/_150/_150/_150/_150" | "mocks/_450/_450/_450" | "mocks/_487/_487/_487/_487" | "mocks/_28/_28/_28/_28" | "mocks/_133/_133/_133/_133/_133" | "mocks/_143/_143/_143/_143" | "mocks/_26/_26/_26/_26/_26/_26/_26" | "mocks/_424/_424/_424/_424" | "mocks/_455/_455" | "mocks/_306/_306/_306" | "mocks/_109/_109/_109/_109/_109" | "mocks/_98/_98/_98/_98/_98/_98/_98/_98/_98" | "mocks/_319/_319/_319/_319/_319/_319/_319/_319/_319" | "mocks/_256/_256" | "mocks/_219/_219/_219/_219/_219" | "mocks/_152/_152/_152/_152/_152" | "mocks/_205/_205/_205/_205/_205/_205/_205/_205" | "mocks/_131/_131/_131/_131/_131/_131" | "mocks/_374" | "mocks/_200/_200/_200/_200" | "mocks/_207/_207/_207/_207" | "mocks/_18/_18/_18/_18/_18" | "mocks/_243/_243/_243/_243/_243" | "mocks/_312/_312/_312/_312" | "mocks/_330/_330" | "mocks/_421/_421/_421" | "mocks/_153/_153/_153/_153/_153/_153/_153" | "mocks/_341/_341" | "mocks/_4/_4/_4/_4/_4/_4" | "mocks/_480/_480/_480/_480/_480" | "mocks/_453" | "mocks/_268/_268/_268/_268/_268/_268/_268" | "mocks/_142/_142/_142/_142/_142/_142/_142/_142" | "mocks/_427/_427/_427/_427/_427/_427/_427/_427" | "mocks/_245/_245/_245/_245/_245" | "mocks/_127/_127/_127/_127/_127/_127/_127/_127/_127" | "mocks/_300" | "mocks/_280" | "mocks/_60/_60/_60/_60" | "mocks/_13" | "mocks/_390/_390/_390/_390/_390/_390/_390/_390" | "mocks/_135/_135" | "mocks/_408/_408/_408/_408/_408/_408/_408/_408" | "mocks/_173/_173/_173" | "mocks/_425/_425/_425/_425/_425/_425/_425" | "mocks/_196/_196/_196/_196" | "mocks/_347/_347/_347/_347/_347/_347" | "mocks/_409/_409/_409/_409/_409/_409" | "mocks/_88" | "mocks/_373" | "mocks/_253/_253/_253/_253/_253" | "mocks/_78/_78/_78/_78" | "mocks/_282/_282/_282/_282/_282/_282/_282/_282" | "mocks/_294/_294/_294/_294/_294" | "mocks/_52/_52/_52/_52/_52/_52/_52" | "mocks/_398/_398/_398/_398/_398/_398" | "mocks/_170/_170/_170/_170/_170/_170/_170" | "mocks/_116" | "mocks/_403/_403/_403/_403/_403" | "mocks/_190/_190" | "mocks/_222" | "mocks/_327/_327/_327/_327/_327/_327/_327/_327/_327" | "mocks/_154/_154/_154" | "mocks/_410/_410/_410" | "mocks/_422" | "mocks/_415/_415/_415/_415/_415" | "mocks/_358/_358/_358/_358/_358" | "mocks/_43" | "mocks/_492/_492" | "mocks/_434/_434/_434/_434/_434" | "mocks/_39/_39/_39/_39" | "mocks/_122/_122/_122/_122/_122/_122/_122/_122" | "mocks/_364/_364/_364/_364/_364/_364/_364/_364/_364" | "mocks/_89/_89/_89" | "mocks/_372/_372/_372/_372/_372" | "mocks/_380/_380/_380/_380" | "mocks/_23/_23/_23/_23" | "mocks/_251/_251/_251/_251/_251/_251/_251/_251" | "mocks/_193" | "mocks/_186/_186/_186/_186/_186/_186" | "mocks/_428/_428/_428/_428/_428/_428/_428/_428/_428" | "mocks/_103/_103/_103/_103/_103/_103/_103" | "mocks/_488/_488/_488/_488" | "mocks/_17" | "mocks/_454/_454/_454/_454/_454/_454/_454/_454" | "mocks/_311/_311/_311/_311/_311/_311/_311/_311" | "mocks/_42/_42/_42" | "mocks/_249" | "mocks/_284/_284/_284/_284" | "mocks/_86/_86" | "mocks/_477/_477/_477/_477" | "mocks/_441/_441/_441" | "mocks/_414/_414/_414/_414/_414/_414" | "mocks/_27/_27/_27/_27/_27/_27" | "mocks/_164/_164/_164/_164/_164/_164/_164/_164/_164" | "mocks/_320/_320/_320/_320/_320/_320/_320/_320/_320" | "mocks/_494/_494/_494/_494/_494" | "mocks/_120/_120/_120/_120/_120/_120/_120" | "mocks/_107/_107/_107/_107" | "mocks/_211" | "mocks/_100/_100/_100/_100/_100/_100" | "mocks/_92/_92" | "mocks/_252" | "mocks/_495/_495/_495/_495" | "mocks/_387/_387" | "mocks/_281/_281/_281" | "mocks/_318/_318/_318/_318/_318/_318/_318/_318/_318" | "mocks/_83/_83/_83/_83/_83" | "mocks/_25/_25/_25/_25/_25/_25" | "mocks/_278/_278/_278" | "mocks/_79/_79/_79/_79" | "mocks/_201/_201/_201/_201/_201/_201/_201/_201" | "mocks/_402/_402/_402/_402/_402/_402" | "mocks/_119" | "mocks/_299/_299/_299/_299/_299/_299/_299" | "mocks/_3/_3" | "mocks/_462/_462/_462/_462/_462/_462/_462/_462/_462" | "mocks/_345/_345/_345/_345/_345" | "mocks/_233/_233/_233/_233/_233/_233" | "mocks/_82/_82" | "mocks/_399/_399/_399/_399/_399/_399" | "mocks/_9/_9/_9/_9" | "mocks/_7/_7/_7/_7/_7/_7/_7/_7/_7" | "mocks/_355/_355/_355/_355/_355/_355/_355/_355" | "mocks/_34/_34/_34/_34/_34/_34/_34" | "mocks/_334/_334/_334/_334/_334/_334/_334/_334/_334" | "mocks/_236/_236/_236/_236/_236/_236/_236/_236" | "mocks" | "mocks/_388/_388/_388/_388/_388/_388/_388/_388" | "mocks/_168/_168/_168/_168/_168/_168/_168/_168/_168" | "mocks/_307/_307/_307/_307/_307/_307/_307" | "mocks/_407/_407" | "mocks/_401/_401/_401/_401/_401/_401/_401/_401/_401" | "mocks/_46/_46/_46/_46/_46" | "mocks/_269/_269/_269/_269/_269/_269" | "mocks/_147" | "mocks/_369/_369" | "mocks/_171/_171" | "mocks/_353/_353/_353/_353" | "mocks/_111/_111/_111/_111/_111/_111/_111" | "mocks/_417/_417/_417" | "mocks/_218" | "mocks/_65/_65/_65" | "mocks/_177/_177/_177/_177/_177/_177/_177/_177" | "mocks/_232/_232/_232/_232/_232/_232/_232/_232/_232" | "mocks/_181/_181/_181/_181/_181/_181" | "mocks/_338/_338/_338/_338/_338/_338/_338" | "mocks/_431/_431/_431" | "mocks/_80/_80/_80/_80/_80/_80" | "mocks/_31/_31/_31/_31/_31/_31/_31/_31" | "mocks/_336/_336/_336/_336/_336/_336" | "mocks/_292/_292/_292/_292/_292/_292/_292/_292" | "mocks/_110/_110/_110/_110/_110/_110/_110/_110/_110" | "mocks/_471/_471/_471" | "mocks/_367/_367/_367/_367/_367/_367/_367/_367/_367" | "mocks/_490/_490/_490/_490/_490/_490/_490/_490/_490" | "mocks/_475/_475/_475/_475/_475/_475/_475/_475/_475" | "mocks/_191/_191/_191" | "mocks/_340/_340/_340/_340/_340/_340/_340" | "mocks/_1/_1/_1/_1/_1/_1" | "mocks/_262/_262/_262/_262/_262/_262/_262/_262" | "mocks/_187/_187/_187" | "mocks/_356/_356/_356/_356" | "mocks/_323/_323/_323/_323" | "mocks/_326/_326/_326/_326/_326" | "mocks/_229/_229/_229" | "mocks/_226/_226/_226/_226/_226/_226/_226/_226" | "mocks/_90/_90/_90/_90/_90/_90/_90/_90" | "mocks/_435/_435/_435/_435/_435/_435/_435/_435/_435" | "mocks/_445/_445/_445/_445/_445/_445" | "mocks/_95/_95/_95/_95" | "mocks/_194/_194/_194/_194/_194" | "mocks/_271" | "mocks/_137/_137/_137/_137/_137/_137/_137" | "mocks/_146/_146/_146/_146" | "mocks/_158/_158/_158/_158/_158/_158/_158/_158" | "mocks/_188/_188/_188/_188/_188/_188/_188" | "mocks/_322/_322/_322/_322" | "mocks/_283/_283/_283/_283/_283/_283/_283/_283" | "mocks/_126/_126/_126/_126/_126/_126" | "mocks/_348" | "mocks/_385" | "mocks/_315/_315/_315/_315/_315/_315/_315/_315/_315" | "mocks/_241/_241/_241" | "mocks/_485" | "mocks/_32/_32/_32/_32/_32/_32" | "mocks/_497" | "mocks/_359/_359/_359/_359/_359/_359/_359/_359/_359" | "mocks/_316/_316/_316" | "mocks/_33/_33/_33" | "mocks/_74/_74/_74/_74/_74/_74/_74/_74/_74" | "mocks/_416/_416/_416/_416" | "mocks/_277" | "mocks/_295/_295/_295/_295" | "mocks/_178/_178/_178/_178/_178/_178/_178" | "mocks/_412/_412/_412" | "mocks/_324/_324/_324/_324/_324/_324/_324/_324/_324" | "mocks/_148" | "mocks/_406" | "mocks/_223/_223/_223/_223" | "mocks/_11/_11" | "mocks/_466/_466/_466/_466" | "mocks/_63" | "mocks/_35/_35/_35/_35/_35" | "mocks/_248/_248/_248/_248" | "mocks/_270/_270/_270/_270/_270/_270/_270" | "mocks/_263/_263/_263/_263/_263/_263" | "mocks/_459/_459" | "mocks/_393/_393/_393/_393" | "mocks/_426/_426/_426/_426/_426/_426/_426" | "mocks/_64/_64/_64/_64/_64/_64" | "mocks/_231/_231/_231/_231/_231/_231/_231" | "mocks/_489/_489" | "mocks/_305/_305/_305" | "mocks/_371/_371/_371/_371/_371/_371/_371/_371/_371" | "mocks/_344/_344/_344" | "mocks/_40/_40/_40" | "mocks/_478/_478/_478" | "mocks/_349/_349/_349" | "mocks/_491/_491/_491/_491/_491/_491" | "mocks/_165/_165/_165/_165/_165/_165" | "mocks/_6/_6" | "mocks/_212/_212/_212/_212/_212/_212" | "mocks/_85/_85/_85/_85/_85" | "mocks/_128/_128/_128/_128" | "mocks/_57/_57/_57/_57/_57/_57/_57/_57" | "mocks/_159/_159" | "mocks/_461/_461/_461/_461/_461" | "mocks/_273/_273" | "mocks/_377/_377" | "mocks/_444/_444/_444/_444/_444/_444/_444" | "mocks/_0/_0/_0" | "mocks/_112/_112/_112" | "mocks/_214/_214/_214/_214/_214/_214/_214/_214" | "mocks/_54/_54/_54" | "mocks/_192/_192/_192/_192/_192" | "mocks/_10/_10/_10" | "mocks/_224/_224/_224" | "mocks/_460/_460/_460/_460/_460/_460/_460/_460" | "mocks/_5/_5/_5" | "mocks/_77/_77" | "mocks/_481/_481/_481" | "mocks/_195/_195/_195/_195/_195/_195/_195/_195" | "mocks/_279" | "mocks/_363/_363/_363/_363/_363/_363/_363" | "mocks/_386/_386/_386/_386" | "mocks/_234/_234/_234/_234/_234/_234" | "mocks/_430/_430/_430/_430/_430/_430/_430/_430/_430" | "mocks/_346/_346/_346/_346" | "mocks/_290/_290/_290/_290" | "mocks/_291/_291/_291/_291/_291/_291" | "mocks/_288/_288/_288/_288" | "mocks/_139/_139/_139/_139" | "mocks/_448/_448/_448/_448" | "mocks/_296/_296/_296/_296/_296/_296/_296/_296" | "mocks/_375/_375/_375/_375/_375/_375/_375/_375" | "mocks/_67/_67/_67/_67/_67/_67" | "mocks/_91/_91" | "mocks/_16/_16/_16/_16/_16/_16" | "mocks/_69/_69/_69/_69/_69" | "mocks/_157/_157/_157" | "mocks/_19/_19/_19" | "mocks/_114/_114/_114/_114/_114/_114/_114/_114/_114" | "mocks/_235/_235/_235/_235/_235/_235/_235/_235/_235" | "mocks/_162/_162/_162/_162/_162" | "mocks/_209/_209/_209/_209/_209/_209/_209/_209" | "mocks/_370/_370" | "mocks/_180/_180" | "mocks/_418/_418/_418/_418" | "mocks/_331/_331/_331/_331/_331/_331/_331" | "mocks/_132/_132/_132/_132/_132" | "mocks/_419/_419/_419/_419/_419/_419" | "mocks/_397/_397/_397/_397" | "mocks/_94/_94/_94/_94/_94" | "mocks/_274/_274/_274/_274/_274/_274/_274" | "mocks/_115/_115" | "mocks/_351/_351/_351/_351/_351/_351/_351/_351" | "mocks/_238/_238/_238/_238" | "mocks/_206/_206/_206/_206/_206/_206" | "mocks/_357/_357/_357" | "mocks/_468/_468" | "mocks/_167/_167/_167/_167" | "mocks/_217/_217/_217/_217/_217/_217/_217/_217" | "mocks/_2/_2/_2/_2/_2" | "mocks/_144/_144" | "mocks/_213/_213/_213/_213/_213/_213/_213/_213/_213" | "mocks/_482/_482/_482/_482/_482/_482" | "mocks/_22/_22/_22/_22/_22/_22/_22/_22/_22" | "mocks/_285/_285/_285" | "mocks/_476/_476/_476/_476/_476/_476/_476" | "mocks/_440" | "mocks/_303/_303/_303/_303/_303/_303/_303/_303" | "mocks/_61/_61" | "mocks/_395/_395/_395/_395/_395/_395/_395/_395" | "mocks/_56/_56/_56/_56/_56/_56/_56/_56" | "mocks/_483/_483/_483/_483/_483/_483/_483/_483/_483" | "mocks/_496/_496/_496/_496/_496" | "mocks/_389/_389/_389/_389/_389/_389/_389/_389/_389" | "mocks/_104/_104/_104" | "mocks/_304/_304/_304/_304/_304/_304/_304/_304" | "mocks/_29/_29/_29" | "mocks/_443/_443/_443/_443" | "mocks/_337/_337/_337/_337/_337/_337" | "mocks/_267/_267/_267/_267/_267/_267/_267" | "mocks/_208/_208/_208/_208/_208/_208/_208" | "mocks/_189/_189/_189" | "mocks/_239/_239" | "mocks/_14" | "mocks/_354/_354/_354/_354/_354/_354" | "mocks/_250/_250/_250" | "mocks/_258/_258/_258/_258/_258/_258/_258/_258" | "mocks/_479/_479/_479/_479/_479/_479/_479/_479" | "mocks/_221/_221/_221/_221" | "mocks/_301/_301/_301/_301/_301/_301/_301" | "mocks/_183/_183/_183" | "mocks/_498/_498/_498/_498/_498/_498/_498/_498" | "mocks/_12/_12/_12/_12/_12" | "mocks/_286" | "mocks/_265/_265/_265/_265/_265/_265" | "mocks/_75" | "mocks/_96/_96/_96/_96/_96/_96/_96" | "mocks/_350/_350" | "mocks/_391/_391/_391" | "mocks/_51/_51/_51/_51/_51/_51/_51/_51" | "mocks/_259/_259/_259/_259/_259/_259/_259/_259/_259" | "mocks/_420/_420" | "mocks/_117/_117/_117/_117/_117/_117" | "mocks/_36" | "mocks/_335" | "mocks/_113/_113/_113/_113" | "mocks/_439" | "mocks/_376/_376/_376/_376/_376/_376/_376" | "mocks/_261/_261" | "mocks/_197/_197/_197/_197" | "mocks/_202/_202/_202/_202" | "mocks/_451/_451/_451/_451/_451/_451/_451/_451" | "mocks/_140/_140/_140/_140/_140/_140" | "mocks/_309/_309/_309/_309" | "mocks/_392" | "mocks/_400/_400/_400/_400/_400/_400" | "mocks/_50/_50/_50/_50/_50/_50/_50/_50" | "mocks/_436/_436/_436/_436" | "mocks/_227/_227/_227/_227" | "mocks/_328/_328/_328/_328" | "mocks/_360/_360/_360/_360/_360/_360/_360/_360/_360" | "mocks/_106/_106/_106/_106/_106/_106" | "mocks/_247/_247/_247/_247/_247/_247" | "mocks/_48/_48/_48" | "mocks/_141/_141/_141/_141/_141/_141/_141" | "mocks/_446/_446/_446/_446/_446/_446" | "mocks/_365" | "mocks/_240" | "mocks/_493" | "mocks/_105/_105/_105/_105/_105/_105/_105/_105/_105" | "mocks/_396/_396/_396" | "mocks/_242/_242/_242" | "mocks/_447/_447/_447" | "mocks/_76/_76/_76/_76" | "mocks/_423/_423/_423/_423/_423" | "mocks/_473/_473/_473" | "mocks/_97/_97" | "mocks/_230/_230/_230/_230" | "mocks/_264/_264" | "mocks/_456/_456/_456/_456/_456/_456" | "mocks/_313/_313/_313/_313/_313/_313/_313" | "mocks/_136" | "mocks/_184/_184/_184/_184/_184/_184/_184/_184" | "mocks/_163" | "mocks/_228/_228/_228/_228/_228/_228/_228/_228/_228" | "mocks/_275/_275" | "mocks/_166/_166/_166" | "mocks/_108" | "mocks/_123/_123/_123/_123" | "mocks/_339/_339/_339/_339/_339/_339/_339/_339/_339" | "mocks/_411/_411/_411/_411/_411/_411/_411/_411/_411" | "mocks/_53/_53" | "mocks/_342/_342/_342/_342" | "mocks/_204/_204" | "mocks/_484/_484/_484/_484" | "mocks/_266/_266/_266/_266/_266/_266" | "mocks/_15/_15/_15/_15/_15/_15/_15" | "mocks/_47/_47/_47/_47/_47/_47" | "mocks/_38/_38/_38/_38/_38/_38/_38/_38/_38" | "mocks/_467/_467/_467/_467" | "mocks/_49/_49/_49/_49/_49/_49/_49/_49/_49" | "mocks/_59/_59/_59" | "mocks/_366" | "mocks/_297/_297/_297/_297/_297/_297/_297" | "mocks/_381/_381/_381" | "mocks/_121/_121/_121/_121/_121/_121/_121/_121" | "mocks/_289/_289/_289/_289/_289" | "mocks/_174/_174" | "mocks/_352/_352/_352/_352/_352" | "mocks/_55/_55" | "mocks/_24/_24/_24/_24/_24/_24/_24/_24/_24" | "mocks/_332/_332/_332/_332" | "mocks/_404/_404/_404/_404" | "mocks/_293/_293/_293/_293/_293/_293" | "mocks/_437/_437/_437/_437/_437/_437" | "mocks/_429/_429/_429/_429/_429/_429/_429" | "mocks/_432" | "mocks/_151/_151/_151/_151/_151/_151" | "mocks/_8/_8/_8/_8/_8/_8/_8/_8/_8" | "mocks/_210/_210/_210/_210/_210/_210/_210" | "mocks/_138/_138/_138/_138" | "mocks/_99/_99/_99/_99" | "mocks/_179/_179/_179/_179/_179/_179" | "mocks/_58/_58/_58/_58" | "mocks/_237/_237/_237/_237" | "mocks/_255/_255/_255/_255/_255" | "mocks/_244/_244/_244" | "mocks/_125/_125/_125/_125/_125/_125/_125" | "mocks/_66/_66/_66" | "mocks/_499/_499/_499/_499/_499" | "mocks/_182/_182/_182/_182" | "mocks/_287/_287/_287/_287/_287" | "mocks/_310/_310" | "mocks/_41/_41" | "mocks/_470/_470/_470/_470/_470/_470" | "mocks/_203" | "mocks/_382/_382/_382/_382/_382/_382/_382/_382/_382" | "mocks/_452/_452/_452/_452/_452/_452/_452" | "mocks/_486/_486";

export type AsyncEmitBodyMap = {
[key: `x/${string}`]: OmitFunctions<{
  message: string
}>;
"": OmitFunctions<{
  message: string
}>;
"mocks/_433/_433/_433/_433/_433/_433/_433/_433/_433": OmitFunctions<{
  message: string
}>;
"mocks/_156": OmitFunctions<{
  message: string
}>;
"mocks/_254/_254/_254/_254": OmitFunctions<{
  message: string
}>;
"mocks/_378/_378/_378/_378/_378/_378/_378/_378/_378": OmitFunctions<{
  message: string
}>;
"mocks/_93/_93/_93/_93/_93/_93": OmitFunctions<{
  message: string
}>;
"mocks/_84/_84/_84/_84/_84/_84/_84/_84/_84": OmitFunctions<{
  message: string
}>;
"mocks/_102/_102/_102/_102/_102": OmitFunctions<{
  message: string
}>;
"mocks/_361/_361/_361": OmitFunctions<{
  message: string
}>;
"mocks/_175/_175/_175/_175/_175/_175/_175/_175": OmitFunctions<{
  message: string
}>;
"mocks/_20/_20/_20/_20": OmitFunctions<{
  message: string
}>;
"mocks/_215/_215/_215/_215/_215": OmitFunctions<{
  message: string
}>;
"mocks/_220/_220/_220/_220/_220/_220/_220/_220/_220": OmitFunctions<{
  message: string
}>;
"mocks/_405": OmitFunctions<{
  message: string
}>;
"mocks/_199/_199/_199": OmitFunctions<{
  message: string
}>;
"mocks/_442/_442/_442/_442/_442/_442/_442/_442/_442": OmitFunctions<{
  message: string
}>;
"mocks/_198/_198/_198/_198/_198/_198": OmitFunctions<{
  message: string
}>;
"mocks/_413/_413/_413/_413/_413/_413/_413": OmitFunctions<{
  message: string
}>;
"mocks/_216/_216/_216/_216": OmitFunctions<{
  message: string
}>;
"mocks/_298/_298/_298/_298/_298/_298/_298": OmitFunctions<{
  message: string
}>;
"mocks/_185/_185/_185/_185/_185": OmitFunctions<{
  message: string
}>;
"mocks/_160/_160/_160": OmitFunctions<{
  message: string
}>;
"mocks/_362/_362/_362": OmitFunctions<{
  message: string
}>;
"mocks/_457/_457/_457/_457/_457/_457/_457/_457": OmitFunctions<{
  message: string
}>;
"mocks/_72/_72": OmitFunctions<{
  message: string
}>;
"mocks/_463/_463/_463/_463": OmitFunctions<{
  message: string
}>;
"mocks/_314/_314/_314/_314": OmitFunctions<{
  message: string
}>;
"mocks/_449/_449/_449/_449/_449/_449/_449": OmitFunctions<{
  message: string
}>;
"mocks/_169/_169": OmitFunctions<{
  message: string
}>;
"mocks/_472/_472/_472/_472/_472/_472/_472": OmitFunctions<{
  message: string
}>;
"mocks/_458/_458/_458/_458/_458/_458/_458": OmitFunctions<{
  message: string
}>;
"mocks/_474/_474/_474/_474/_474/_474": OmitFunctions<{
  message: string
}>;
"mocks/_465/_465/_465/_465/_465/_465/_465/_465/_465": OmitFunctions<{
  message: string
}>;
"mocks/_272/_272/_272/_272/_272/_272/_272": OmitFunctions<{
  message: string
}>;
"mocks/_150/_150/_150/_150/_150/_150/_150": OmitFunctions<{
  message: string
}>;
"mocks/_450/_450/_450": OmitFunctions<{
  message: string
}>;
"mocks/_487/_487/_487/_487": OmitFunctions<{
  message: string
}>;
"mocks/_28/_28/_28/_28": OmitFunctions<{
  message: string
}>;
"mocks/_133/_133/_133/_133/_133": OmitFunctions<{
  message: string
}>;
"mocks/_143/_143/_143/_143": OmitFunctions<{
  message: string
}>;
"mocks/_26/_26/_26/_26/_26/_26/_26": OmitFunctions<{
  message: string
}>;
"mocks/_424/_424/_424/_424": OmitFunctions<{
  message: string
}>;
"mocks/_455/_455": OmitFunctions<{
  message: string
}>;
"mocks/_306/_306/_306": OmitFunctions<{
  message: string
}>;
"mocks/_109/_109/_109/_109/_109": OmitFunctions<{
  message: string
}>;
"mocks/_98/_98/_98/_98/_98/_98/_98/_98/_98": OmitFunctions<{
  message: string
}>;
"mocks/_319/_319/_319/_319/_319/_319/_319/_319/_319": OmitFunctions<{
  message: string
}>;
"mocks/_256/_256": OmitFunctions<{
  message: string
}>;
"mocks/_219/_219/_219/_219/_219": OmitFunctions<{
  message: string
}>;
"mocks/_152/_152/_152/_152/_152": OmitFunctions<{
  message: string
}>;
"mocks/_205/_205/_205/_205/_205/_205/_205/_205": OmitFunctions<{
  message: string
}>;
"mocks/_131/_131/_131/_131/_131/_131": OmitFunctions<{
  message: string
}>;
"mocks/_374": OmitFunctions<{
  message: string
}>;
"mocks/_200/_200/_200/_200": OmitFunctions<{
  message: string
}>;
"mocks/_207/_207/_207/_207": OmitFunctions<{
  message: string
}>;
"mocks/_18/_18/_18/_18/_18": OmitFunctions<{
  message: string
}>;
"mocks/_243/_243/_243/_243/_243": OmitFunctions<{
  message: string
}>;
"mocks/_312/_312/_312/_312": OmitFunctions<{
  message: string
}>;
"mocks/_330/_330": OmitFunctions<{
  message: string
}>;
"mocks/_421/_421/_421": OmitFunctions<{
  message: string
}>;
"mocks/_153/_153/_153/_153/_153/_153/_153": OmitFunctions<{
  message: string
}>;
"mocks/_341/_341": OmitFunctions<{
  message: string
}>;
"mocks/_4/_4/_4/_4/_4/_4": OmitFunctions<{
  message: string
}>;
"mocks/_480/_480/_480/_480/_480": OmitFunctions<{
  message: string
}>;
"mocks/_453": OmitFunctions<{
  message: string
}>;
"mocks/_268/_268/_268/_268/_268/_268/_268": OmitFunctions<{
  message: string
}>;
"mocks/_142/_142/_142/_142/_142/_142/_142/_142": OmitFunctions<{
  message: string
}>;
"mocks/_427/_427/_427/_427/_427/_427/_427/_427": OmitFunctions<{
  message: string
}>;
"mocks/_245/_245/_245/_245/_245": OmitFunctions<{
  message: string
}>;
"mocks/_127/_127/_127/_127/_127/_127/_127/_127/_127": OmitFunctions<{
  message: string
}>;
"mocks/_300": OmitFunctions<{
  message: string
}>;
"mocks/_280": OmitFunctions<{
  message: string
}>;
"mocks/_60/_60/_60/_60": OmitFunctions<{
  message: string
}>;
"mocks/_13": OmitFunctions<{
  message: string
}>;
"mocks/_390/_390/_390/_390/_390/_390/_390/_390": OmitFunctions<{
  message: string
}>;
"mocks/_135/_135": OmitFunctions<{
  message: string
}>;
"mocks/_408/_408/_408/_408/_408/_408/_408/_408": OmitFunctions<{
  message: string
}>;
"mocks/_173/_173/_173": OmitFunctions<{
  message: string
}>;
"mocks/_425/_425/_425/_425/_425/_425/_425": OmitFunctions<{
  message: string
}>;
"mocks/_196/_196/_196/_196": OmitFunctions<{
  message: string
}>;
"mocks/_347/_347/_347/_347/_347/_347": OmitFunctions<{
  message: string
}>;
"mocks/_409/_409/_409/_409/_409/_409": OmitFunctions<{
  message: string
}>;
"mocks/_88": OmitFunctions<{
  message: string
}>;
"mocks/_373": OmitFunctions<{
  message: string
}>;
"mocks/_253/_253/_253/_253/_253": OmitFunctions<{
  message: string
}>;
"mocks/_78/_78/_78/_78": OmitFunctions<{
  message: string
}>;
"mocks/_282/_282/_282/_282/_282/_282/_282/_282": OmitFunctions<{
  message: string
}>;
"mocks/_294/_294/_294/_294/_294": OmitFunctions<{
  message: string
}>;
"mocks/_52/_52/_52/_52/_52/_52/_52": OmitFunctions<{
  message: string
}>;
"mocks/_398/_398/_398/_398/_398/_398": OmitFunctions<{
  message: string
}>;
"mocks/_170/_170/_170/_170/_170/_170/_170": OmitFunctions<{
  message: string
}>;
"mocks/_116": OmitFunctions<{
  message: string
}>;
"mocks/_403/_403/_403/_403/_403": OmitFunctions<{
  message: string
}>;
"mocks/_190/_190": OmitFunctions<{
  message: string
}>;
"mocks/_222": OmitFunctions<{
  message: string
}>;
"mocks/_327/_327/_327/_327/_327/_327/_327/_327/_327": OmitFunctions<{
  message: string
}>;
"mocks/_154/_154/_154": OmitFunctions<{
  message: string
}>;
"mocks/_410/_410/_410": OmitFunctions<{
  message: string
}>;
"mocks/_422": OmitFunctions<{
  message: string
}>;
"mocks/_415/_415/_415/_415/_415": OmitFunctions<{
  message: string
}>;
"mocks/_358/_358/_358/_358/_358": OmitFunctions<{
  message: string
}>;
"mocks/_43": OmitFunctions<{
  message: string
}>;
"mocks/_492/_492": OmitFunctions<{
  message: string
}>;
"mocks/_434/_434/_434/_434/_434": OmitFunctions<{
  message: string
}>;
"mocks/_39/_39/_39/_39": OmitFunctions<{
  message: string
}>;
"mocks/_122/_122/_122/_122/_122/_122/_122/_122": OmitFunctions<{
  message: string
}>;
"mocks/_364/_364/_364/_364/_364/_364/_364/_364/_364": OmitFunctions<{
  message: string
}>;
"mocks/_89/_89/_89": OmitFunctions<{
  message: string
}>;
"mocks/_372/_372/_372/_372/_372": OmitFunctions<{
  message: string
}>;
"mocks/_380/_380/_380/_380": OmitFunctions<{
  message: string
}>;
"mocks/_23/_23/_23/_23": OmitFunctions<{
  message: string
}>;
"mocks/_251/_251/_251/_251/_251/_251/_251/_251": OmitFunctions<{
  message: string
}>;
"mocks/_193": OmitFunctions<{
  message: string
}>;
"mocks/_186/_186/_186/_186/_186/_186": OmitFunctions<{
  message: string
}>;
"mocks/_428/_428/_428/_428/_428/_428/_428/_428/_428": OmitFunctions<{
  message: string
}>;
"mocks/_103/_103/_103/_103/_103/_103/_103": OmitFunctions<{
  message: string
}>;
"mocks/_488/_488/_488/_488": OmitFunctions<{
  message: string
}>;
"mocks/_17": OmitFunctions<{
  message: string
}>;
"mocks/_454/_454/_454/_454/_454/_454/_454/_454": OmitFunctions<{
  message: string
}>;
"mocks/_311/_311/_311/_311/_311/_311/_311/_311": OmitFunctions<{
  message: string
}>;
"mocks/_42/_42/_42": OmitFunctions<{
  message: string
}>;
"mocks/_249": OmitFunctions<{
  message: string
}>;
"mocks/_284/_284/_284/_284": OmitFunctions<{
  message: string
}>;
"mocks/_86/_86": OmitFunctions<{
  message: string
}>;
"mocks/_477/_477/_477/_477": OmitFunctions<{
  message: string
}>;
"mocks/_441/_441/_441": OmitFunctions<{
  message: string
}>;
"mocks/_414/_414/_414/_414/_414/_414": OmitFunctions<{
  message: string
}>;
"mocks/_27/_27/_27/_27/_27/_27": OmitFunctions<{
  message: string
}>;
"mocks/_164/_164/_164/_164/_164/_164/_164/_164/_164": OmitFunctions<{
  message: string
}>;
"mocks/_320/_320/_320/_320/_320/_320/_320/_320/_320": OmitFunctions<{
  message: string
}>;
"mocks/_494/_494/_494/_494/_494": OmitFunctions<{
  message: string
}>;
"mocks/_120/_120/_120/_120/_120/_120/_120": OmitFunctions<{
  message: string
}>;
"mocks/_107/_107/_107/_107": OmitFunctions<{
  message: string
}>;
"mocks/_211": OmitFunctions<{
  message: string
}>;
"mocks/_100/_100/_100/_100/_100/_100": OmitFunctions<{
  message: string
}>;
"mocks/_92/_92": OmitFunctions<{
  message: string
}>;
"mocks/_252": OmitFunctions<{
  message: string
}>;
"mocks/_495/_495/_495/_495": OmitFunctions<{
  message: string
}>;
"mocks/_387/_387": OmitFunctions<{
  message: string
}>;
"mocks/_281/_281/_281": OmitFunctions<{
  message: string
}>;
"mocks/_318/_318/_318/_318/_318/_318/_318/_318/_318": OmitFunctions<{
  message: string
}>;
"mocks/_83/_83/_83/_83/_83": OmitFunctions<{
  message: string
}>;
"mocks/_25/_25/_25/_25/_25/_25": OmitFunctions<{
  message: string
}>;
"mocks/_278/_278/_278": OmitFunctions<{
  message: string
}>;
"mocks/_79/_79/_79/_79": OmitFunctions<{
  message: string
}>;
"mocks/_201/_201/_201/_201/_201/_201/_201/_201": OmitFunctions<{
  message: string
}>;
"mocks/_402/_402/_402/_402/_402/_402": OmitFunctions<{
  message: string
}>;
"mocks/_119": OmitFunctions<{
  message: string
}>;
"mocks/_299/_299/_299/_299/_299/_299/_299": OmitFunctions<{
  message: string
}>;
"mocks/_3/_3": OmitFunctions<{
  message: string
}>;
"mocks/_462/_462/_462/_462/_462/_462/_462/_462/_462": OmitFunctions<{
  message: string
}>;
"mocks/_345/_345/_345/_345/_345": OmitFunctions<{
  message: string
}>;
"mocks/_233/_233/_233/_233/_233/_233": OmitFunctions<{
  message: string
}>;
"mocks/_82/_82": OmitFunctions<{
  message: string
}>;
"mocks/_399/_399/_399/_399/_399/_399": OmitFunctions<{
  message: string
}>;
"mocks/_9/_9/_9/_9": OmitFunctions<{
  message: string
}>;
"mocks/_7/_7/_7/_7/_7/_7/_7/_7/_7": OmitFunctions<{
  message: string
}>;
"mocks/_355/_355/_355/_355/_355/_355/_355/_355": OmitFunctions<{
  message: string
}>;
"mocks/_34/_34/_34/_34/_34/_34/_34": OmitFunctions<{
  message: string
}>;
"mocks/_334/_334/_334/_334/_334/_334/_334/_334/_334": OmitFunctions<{
  message: string
}>;
"mocks/_236/_236/_236/_236/_236/_236/_236/_236": OmitFunctions<{
  message: string
}>;
"mocks": OmitFunctions<{
  message: string
}>;
"mocks/_388/_388/_388/_388/_388/_388/_388/_388": OmitFunctions<{
  message: string
}>;
"mocks/_168/_168/_168/_168/_168/_168/_168/_168/_168": OmitFunctions<{
  message: string
}>;
"mocks/_307/_307/_307/_307/_307/_307/_307": OmitFunctions<{
  message: string
}>;
"mocks/_407/_407": OmitFunctions<{
  message: string
}>;
"mocks/_401/_401/_401/_401/_401/_401/_401/_401/_401": OmitFunctions<{
  message: string
}>;
"mocks/_46/_46/_46/_46/_46": OmitFunctions<{
  message: string
}>;
"mocks/_269/_269/_269/_269/_269/_269": OmitFunctions<{
  message: string
}>;
"mocks/_147": OmitFunctions<{
  message: string
}>;
"mocks/_369/_369": OmitFunctions<{
  message: string
}>;
"mocks/_171/_171": OmitFunctions<{
  message: string
}>;
"mocks/_353/_353/_353/_353": OmitFunctions<{
  message: string
}>;
"mocks/_111/_111/_111/_111/_111/_111/_111": OmitFunctions<{
  message: string
}>;
"mocks/_417/_417/_417": OmitFunctions<{
  message: string
}>;
"mocks/_218": OmitFunctions<{
  message: string
}>;
"mocks/_65/_65/_65": OmitFunctions<{
  message: string
}>;
"mocks/_177/_177/_177/_177/_177/_177/_177/_177": OmitFunctions<{
  message: string
}>;
"mocks/_232/_232/_232/_232/_232/_232/_232/_232/_232": OmitFunctions<{
  message: string
}>;
"mocks/_181/_181/_181/_181/_181/_181": OmitFunctions<{
  message: string
}>;
"mocks/_338/_338/_338/_338/_338/_338/_338": OmitFunctions<{
  message: string
}>;
"mocks/_431/_431/_431": OmitFunctions<{
  message: string
}>;
"mocks/_80/_80/_80/_80/_80/_80": OmitFunctions<{
  message: string
}>;
"mocks/_31/_31/_31/_31/_31/_31/_31/_31": OmitFunctions<{
  message: string
}>;
"mocks/_336/_336/_336/_336/_336/_336": OmitFunctions<{
  message: string
}>;
"mocks/_292/_292/_292/_292/_292/_292/_292/_292": OmitFunctions<{
  message: string
}>;
"mocks/_110/_110/_110/_110/_110/_110/_110/_110/_110": OmitFunctions<{
  message: string
}>;
"mocks/_471/_471/_471": OmitFunctions<{
  message: string
}>;
"mocks/_367/_367/_367/_367/_367/_367/_367/_367/_367": OmitFunctions<{
  message: string
}>;
"mocks/_490/_490/_490/_490/_490/_490/_490/_490/_490": OmitFunctions<{
  message: string
}>;
"mocks/_475/_475/_475/_475/_475/_475/_475/_475/_475": OmitFunctions<{
  message: string
}>;
"mocks/_191/_191/_191": OmitFunctions<{
  message: string
}>;
"mocks/_340/_340/_340/_340/_340/_340/_340": OmitFunctions<{
  message: string
}>;
"mocks/_1/_1/_1/_1/_1/_1": OmitFunctions<{
  message: string
}>;
"mocks/_262/_262/_262/_262/_262/_262/_262/_262": OmitFunctions<{
  message: string
}>;
"mocks/_187/_187/_187": OmitFunctions<{
  message: string
}>;
"mocks/_356/_356/_356/_356": OmitFunctions<{
  message: string
}>;
"mocks/_323/_323/_323/_323": OmitFunctions<{
  message: string
}>;
"mocks/_326/_326/_326/_326/_326": OmitFunctions<{
  message: string
}>;
"mocks/_229/_229/_229": OmitFunctions<{
  message: string
}>;
"mocks/_226/_226/_226/_226/_226/_226/_226/_226": OmitFunctions<{
  message: string
}>;
"mocks/_90/_90/_90/_90/_90/_90/_90/_90": OmitFunctions<{
  message: string
}>;
"mocks/_435/_435/_435/_435/_435/_435/_435/_435/_435": OmitFunctions<{
  message: string
}>;
"mocks/_445/_445/_445/_445/_445/_445": OmitFunctions<{
  message: string
}>;
"mocks/_95/_95/_95/_95": OmitFunctions<{
  message: string
}>;
"mocks/_194/_194/_194/_194/_194": OmitFunctions<{
  message: string
}>;
"mocks/_271": OmitFunctions<{
  message: string
}>;
"mocks/_137/_137/_137/_137/_137/_137/_137": OmitFunctions<{
  message: string
}>;
"mocks/_146/_146/_146/_146": OmitFunctions<{
  message: string
}>;
"mocks/_158/_158/_158/_158/_158/_158/_158/_158": OmitFunctions<{
  message: string
}>;
"mocks/_188/_188/_188/_188/_188/_188/_188": OmitFunctions<{
  message: string
}>;
"mocks/_322/_322/_322/_322": OmitFunctions<{
  message: string
}>;
"mocks/_283/_283/_283/_283/_283/_283/_283/_283": OmitFunctions<{
  message: string
}>;
"mocks/_126/_126/_126/_126/_126/_126": OmitFunctions<{
  message: string
}>;
"mocks/_348": OmitFunctions<{
  message: string
}>;
"mocks/_385": OmitFunctions<{
  message: string
}>;
"mocks/_315/_315/_315/_315/_315/_315/_315/_315/_315": OmitFunctions<{
  message: string
}>;
"mocks/_241/_241/_241": OmitFunctions<{
  message: string
}>;
"mocks/_485": OmitFunctions<{
  message: string
}>;
"mocks/_32/_32/_32/_32/_32/_32": OmitFunctions<{
  message: string
}>;
"mocks/_497": OmitFunctions<{
  message: string
}>;
"mocks/_359/_359/_359/_359/_359/_359/_359/_359/_359": OmitFunctions<{
  message: string
}>;
"mocks/_316/_316/_316": OmitFunctions<{
  message: string
}>;
"mocks/_33/_33/_33": OmitFunctions<{
  message: string
}>;
"mocks/_74/_74/_74/_74/_74/_74/_74/_74/_74": OmitFunctions<{
  message: string
}>;
"mocks/_416/_416/_416/_416": OmitFunctions<{
  message: string
}>;
"mocks/_277": OmitFunctions<{
  message: string
}>;
"mocks/_295/_295/_295/_295": OmitFunctions<{
  message: string
}>;
"mocks/_178/_178/_178/_178/_178/_178/_178": OmitFunctions<{
  message: string
}>;
"mocks/_412/_412/_412": OmitFunctions<{
  message: string
}>;
"mocks/_324/_324/_324/_324/_324/_324/_324/_324/_324": OmitFunctions<{
  message: string
}>;
"mocks/_148": OmitFunctions<{
  message: string
}>;
"mocks/_406": OmitFunctions<{
  message: string
}>;
"mocks/_223/_223/_223/_223": OmitFunctions<{
  message: string
}>;
"mocks/_11/_11": OmitFunctions<{
  message: string
}>;
"mocks/_466/_466/_466/_466": OmitFunctions<{
  message: string
}>;
"mocks/_63": OmitFunctions<{
  message: string
}>;
"mocks/_35/_35/_35/_35/_35": OmitFunctions<{
  message: string
}>;
"mocks/_248/_248/_248/_248": OmitFunctions<{
  message: string
}>;
"mocks/_270/_270/_270/_270/_270/_270/_270": OmitFunctions<{
  message: string
}>;
"mocks/_263/_263/_263/_263/_263/_263": OmitFunctions<{
  message: string
}>;
"mocks/_459/_459": OmitFunctions<{
  message: string
}>;
"mocks/_393/_393/_393/_393": OmitFunctions<{
  message: string
}>;
"mocks/_426/_426/_426/_426/_426/_426/_426": OmitFunctions<{
  message: string
}>;
"mocks/_64/_64/_64/_64/_64/_64": OmitFunctions<{
  message: string
}>;
"mocks/_231/_231/_231/_231/_231/_231/_231": OmitFunctions<{
  message: string
}>;
"mocks/_489/_489": OmitFunctions<{
  message: string
}>;
"mocks/_305/_305/_305": OmitFunctions<{
  message: string
}>;
"mocks/_371/_371/_371/_371/_371/_371/_371/_371/_371": OmitFunctions<{
  message: string
}>;
"mocks/_344/_344/_344": OmitFunctions<{
  message: string
}>;
"mocks/_40/_40/_40": OmitFunctions<{
  message: string
}>;
"mocks/_478/_478/_478": OmitFunctions<{
  message: string
}>;
"mocks/_349/_349/_349": OmitFunctions<{
  message: string
}>;
"mocks/_491/_491/_491/_491/_491/_491": OmitFunctions<{
  message: string
}>;
"mocks/_165/_165/_165/_165/_165/_165": OmitFunctions<{
  message: string
}>;
"mocks/_6/_6": OmitFunctions<{
  message: string
}>;
"mocks/_212/_212/_212/_212/_212/_212": OmitFunctions<{
  message: string
}>;
"mocks/_85/_85/_85/_85/_85": OmitFunctions<{
  message: string
}>;
"mocks/_128/_128/_128/_128": OmitFunctions<{
  message: string
}>;
"mocks/_57/_57/_57/_57/_57/_57/_57/_57": OmitFunctions<{
  message: string
}>;
"mocks/_159/_159": OmitFunctions<{
  message: string
}>;
"mocks/_461/_461/_461/_461/_461": OmitFunctions<{
  message: string
}>;
"mocks/_273/_273": OmitFunctions<{
  message: string
}>;
"mocks/_377/_377": OmitFunctions<{
  message: string
}>;
"mocks/_444/_444/_444/_444/_444/_444/_444": OmitFunctions<{
  message: string
}>;
"mocks/_0/_0/_0": OmitFunctions<{
  message: string
}>;
"mocks/_112/_112/_112": OmitFunctions<{
  message: string
}>;
"mocks/_214/_214/_214/_214/_214/_214/_214/_214": OmitFunctions<{
  message: string
}>;
"mocks/_54/_54/_54": OmitFunctions<{
  message: string
}>;
"mocks/_192/_192/_192/_192/_192": OmitFunctions<{
  message: string
}>;
"mocks/_10/_10/_10": OmitFunctions<{
  message: string
}>;
"mocks/_224/_224/_224": OmitFunctions<{
  message: string
}>;
"mocks/_460/_460/_460/_460/_460/_460/_460/_460": OmitFunctions<{
  message: string
}>;
"mocks/_5/_5/_5": OmitFunctions<{
  message: string
}>;
"mocks/_77/_77": OmitFunctions<{
  message: string
}>;
"mocks/_481/_481/_481": OmitFunctions<{
  message: string
}>;
"mocks/_195/_195/_195/_195/_195/_195/_195/_195": OmitFunctions<{
  message: string
}>;
"mocks/_279": OmitFunctions<{
  message: string
}>;
"mocks/_363/_363/_363/_363/_363/_363/_363": OmitFunctions<{
  message: string
}>;
"mocks/_386/_386/_386/_386": OmitFunctions<{
  message: string
}>;
"mocks/_234/_234/_234/_234/_234/_234": OmitFunctions<{
  message: string
}>;
"mocks/_430/_430/_430/_430/_430/_430/_430/_430/_430": OmitFunctions<{
  message: string
}>;
"mocks/_346/_346/_346/_346": OmitFunctions<{
  message: string
}>;
"mocks/_290/_290/_290/_290": OmitFunctions<{
  message: string
}>;
"mocks/_291/_291/_291/_291/_291/_291": OmitFunctions<{
  message: string
}>;
"mocks/_288/_288/_288/_288": OmitFunctions<{
  message: string
}>;
"mocks/_139/_139/_139/_139": OmitFunctions<{
  message: string
}>;
"mocks/_448/_448/_448/_448": OmitFunctions<{
  message: string
}>;
"mocks/_296/_296/_296/_296/_296/_296/_296/_296": OmitFunctions<{
  message: string
}>;
"mocks/_375/_375/_375/_375/_375/_375/_375/_375": OmitFunctions<{
  message: string
}>;
"mocks/_67/_67/_67/_67/_67/_67": OmitFunctions<{
  message: string
}>;
"mocks/_91/_91": OmitFunctions<{
  message: string
}>;
"mocks/_16/_16/_16/_16/_16/_16": OmitFunctions<{
  message: string
}>;
"mocks/_69/_69/_69/_69/_69": OmitFunctions<{
  message: string
}>;
"mocks/_157/_157/_157": OmitFunctions<{
  message: string
}>;
"mocks/_19/_19/_19": OmitFunctions<{
  message: string
}>;
"mocks/_114/_114/_114/_114/_114/_114/_114/_114/_114": OmitFunctions<{
  message: string
}>;
"mocks/_235/_235/_235/_235/_235/_235/_235/_235/_235": OmitFunctions<{
  message: string
}>;
"mocks/_162/_162/_162/_162/_162": OmitFunctions<{
  message: string
}>;
"mocks/_209/_209/_209/_209/_209/_209/_209/_209": OmitFunctions<{
  message: string
}>;
"mocks/_370/_370": OmitFunctions<{
  message: string
}>;
"mocks/_180/_180": OmitFunctions<{
  message: string
}>;
"mocks/_418/_418/_418/_418": OmitFunctions<{
  message: string
}>;
"mocks/_331/_331/_331/_331/_331/_331/_331": OmitFunctions<{
  message: string
}>;
"mocks/_132/_132/_132/_132/_132": OmitFunctions<{
  message: string
}>;
"mocks/_419/_419/_419/_419/_419/_419": OmitFunctions<{
  message: string
}>;
"mocks/_397/_397/_397/_397": OmitFunctions<{
  message: string
}>;
"mocks/_94/_94/_94/_94/_94": OmitFunctions<{
  message: string
}>;
"mocks/_274/_274/_274/_274/_274/_274/_274": OmitFunctions<{
  message: string
}>;
"mocks/_115/_115": OmitFunctions<{
  message: string
}>;
"mocks/_351/_351/_351/_351/_351/_351/_351/_351": OmitFunctions<{
  message: string
}>;
"mocks/_238/_238/_238/_238": OmitFunctions<{
  message: string
}>;
"mocks/_206/_206/_206/_206/_206/_206": OmitFunctions<{
  message: string
}>;
"mocks/_357/_357/_357": OmitFunctions<{
  message: string
}>;
"mocks/_468/_468": OmitFunctions<{
  message: string
}>;
"mocks/_167/_167/_167/_167": OmitFunctions<{
  message: string
}>;
"mocks/_217/_217/_217/_217/_217/_217/_217/_217": OmitFunctions<{
  message: string
}>;
"mocks/_2/_2/_2/_2/_2": OmitFunctions<{
  message: string
}>;
"mocks/_144/_144": OmitFunctions<{
  message: string
}>;
"mocks/_213/_213/_213/_213/_213/_213/_213/_213/_213": OmitFunctions<{
  message: string
}>;
"mocks/_482/_482/_482/_482/_482/_482": OmitFunctions<{
  message: string
}>;
"mocks/_22/_22/_22/_22/_22/_22/_22/_22/_22": OmitFunctions<{
  message: string
}>;
"mocks/_285/_285/_285": OmitFunctions<{
  message: string
}>;
"mocks/_476/_476/_476/_476/_476/_476/_476": OmitFunctions<{
  message: string
}>;
"mocks/_440": OmitFunctions<{
  message: string
}>;
"mocks/_303/_303/_303/_303/_303/_303/_303/_303": OmitFunctions<{
  message: string
}>;
"mocks/_61/_61": OmitFunctions<{
  message: string
}>;
"mocks/_395/_395/_395/_395/_395/_395/_395/_395": OmitFunctions<{
  message: string
}>;
"mocks/_56/_56/_56/_56/_56/_56/_56/_56": OmitFunctions<{
  message: string
}>;
"mocks/_483/_483/_483/_483/_483/_483/_483/_483/_483": OmitFunctions<{
  message: string
}>;
"mocks/_496/_496/_496/_496/_496": OmitFunctions<{
  message: string
}>;
"mocks/_389/_389/_389/_389/_389/_389/_389/_389/_389": OmitFunctions<{
  message: string
}>;
"mocks/_104/_104/_104": OmitFunctions<{
  message: string
}>;
"mocks/_304/_304/_304/_304/_304/_304/_304/_304": OmitFunctions<{
  message: string
}>;
"mocks/_29/_29/_29": OmitFunctions<{
  message: string
}>;
"mocks/_443/_443/_443/_443": OmitFunctions<{
  message: string
}>;
"mocks/_337/_337/_337/_337/_337/_337": OmitFunctions<{
  message: string
}>;
"mocks/_267/_267/_267/_267/_267/_267/_267": OmitFunctions<{
  message: string
}>;
"mocks/_208/_208/_208/_208/_208/_208/_208": OmitFunctions<{
  message: string
}>;
"mocks/_189/_189/_189": OmitFunctions<{
  message: string
}>;
"mocks/_239/_239": OmitFunctions<{
  message: string
}>;
"mocks/_14": OmitFunctions<{
  message: string
}>;
"mocks/_354/_354/_354/_354/_354/_354": OmitFunctions<{
  message: string
}>;
"mocks/_250/_250/_250": OmitFunctions<{
  message: string
}>;
"mocks/_258/_258/_258/_258/_258/_258/_258/_258": OmitFunctions<{
  message: string
}>;
"mocks/_479/_479/_479/_479/_479/_479/_479/_479": OmitFunctions<{
  message: string
}>;
"mocks/_221/_221/_221/_221": OmitFunctions<{
  message: string
}>;
"mocks/_301/_301/_301/_301/_301/_301/_301": OmitFunctions<{
  message: string
}>;
"mocks/_183/_183/_183": OmitFunctions<{
  message: string
}>;
"mocks/_498/_498/_498/_498/_498/_498/_498/_498": OmitFunctions<{
  message: string
}>;
"mocks/_12/_12/_12/_12/_12": OmitFunctions<{
  message: string
}>;
"mocks/_286": OmitFunctions<{
  message: string
}>;
"mocks/_265/_265/_265/_265/_265/_265": OmitFunctions<{
  message: string
}>;
"mocks/_75": OmitFunctions<{
  message: string
}>;
"mocks/_96/_96/_96/_96/_96/_96/_96": OmitFunctions<{
  message: string
}>;
"mocks/_350/_350": OmitFunctions<{
  message: string
}>;
"mocks/_391/_391/_391": OmitFunctions<{
  message: string
}>;
"mocks/_51/_51/_51/_51/_51/_51/_51/_51": OmitFunctions<{
  message: string
}>;
"mocks/_259/_259/_259/_259/_259/_259/_259/_259/_259": OmitFunctions<{
  message: string
}>;
"mocks/_420/_420": OmitFunctions<{
  message: string
}>;
"mocks/_117/_117/_117/_117/_117/_117": OmitFunctions<{
  message: string
}>;
"mocks/_36": OmitFunctions<{
  message: string
}>;
"mocks/_335": OmitFunctions<{
  message: string
}>;
"mocks/_113/_113/_113/_113": OmitFunctions<{
  message: string
}>;
"mocks/_439": OmitFunctions<{
  message: string
}>;
"mocks/_376/_376/_376/_376/_376/_376/_376": OmitFunctions<{
  message: string
}>;
"mocks/_261/_261": OmitFunctions<{
  message: string
}>;
"mocks/_197/_197/_197/_197": OmitFunctions<{
  message: string
}>;
"mocks/_202/_202/_202/_202": OmitFunctions<{
  message: string
}>;
"mocks/_451/_451/_451/_451/_451/_451/_451/_451": OmitFunctions<{
  message: string
}>;
"mocks/_140/_140/_140/_140/_140/_140": OmitFunctions<{
  message: string
}>;
"mocks/_309/_309/_309/_309": OmitFunctions<{
  message: string
}>;
"mocks/_392": OmitFunctions<{
  message: string
}>;
"mocks/_400/_400/_400/_400/_400/_400": OmitFunctions<{
  message: string
}>;
"mocks/_50/_50/_50/_50/_50/_50/_50/_50": OmitFunctions<{
  message: string
}>;
"mocks/_436/_436/_436/_436": OmitFunctions<{
  message: string
}>;
"mocks/_227/_227/_227/_227": OmitFunctions<{
  message: string
}>;
"mocks/_328/_328/_328/_328": OmitFunctions<{
  message: string
}>;
"mocks/_360/_360/_360/_360/_360/_360/_360/_360/_360": OmitFunctions<{
  message: string
}>;
"mocks/_106/_106/_106/_106/_106/_106": OmitFunctions<{
  message: string
}>;
"mocks/_247/_247/_247/_247/_247/_247": OmitFunctions<{
  message: string
}>;
"mocks/_48/_48/_48": OmitFunctions<{
  message: string
}>;
"mocks/_141/_141/_141/_141/_141/_141/_141": OmitFunctions<{
  message: string
}>;
"mocks/_446/_446/_446/_446/_446/_446": OmitFunctions<{
  message: string
}>;
"mocks/_365": OmitFunctions<{
  message: string
}>;
"mocks/_240": OmitFunctions<{
  message: string
}>;
"mocks/_493": OmitFunctions<{
  message: string
}>;
"mocks/_105/_105/_105/_105/_105/_105/_105/_105/_105": OmitFunctions<{
  message: string
}>;
"mocks/_396/_396/_396": OmitFunctions<{
  message: string
}>;
"mocks/_242/_242/_242": OmitFunctions<{
  message: string
}>;
"mocks/_447/_447/_447": OmitFunctions<{
  message: string
}>;
"mocks/_76/_76/_76/_76": OmitFunctions<{
  message: string
}>;
"mocks/_423/_423/_423/_423/_423": OmitFunctions<{
  message: string
}>;
"mocks/_473/_473/_473": OmitFunctions<{
  message: string
}>;
"mocks/_97/_97": OmitFunctions<{
  message: string
}>;
"mocks/_230/_230/_230/_230": OmitFunctions<{
  message: string
}>;
"mocks/_264/_264": OmitFunctions<{
  message: string
}>;
"mocks/_456/_456/_456/_456/_456/_456": OmitFunctions<{
  message: string
}>;
"mocks/_313/_313/_313/_313/_313/_313/_313": OmitFunctions<{
  message: string
}>;
"mocks/_136": OmitFunctions<{
  message: string
}>;
"mocks/_184/_184/_184/_184/_184/_184/_184/_184": OmitFunctions<{
  message: string
}>;
"mocks/_163": OmitFunctions<{
  message: string
}>;
"mocks/_228/_228/_228/_228/_228/_228/_228/_228/_228": OmitFunctions<{
  message: string
}>;
"mocks/_275/_275": OmitFunctions<{
  message: string
}>;
"mocks/_166/_166/_166": OmitFunctions<{
  message: string
}>;
"mocks/_108": OmitFunctions<{
  message: string
}>;
"mocks/_123/_123/_123/_123": OmitFunctions<{
  message: string
}>;
"mocks/_339/_339/_339/_339/_339/_339/_339/_339/_339": OmitFunctions<{
  message: string
}>;
"mocks/_411/_411/_411/_411/_411/_411/_411/_411/_411": OmitFunctions<{
  message: string
}>;
"mocks/_53/_53": OmitFunctions<{
  message: string
}>;
"mocks/_342/_342/_342/_342": OmitFunctions<{
  message: string
}>;
"mocks/_204/_204": OmitFunctions<{
  message: string
}>;
"mocks/_484/_484/_484/_484": OmitFunctions<{
  message: string
}>;
"mocks/_266/_266/_266/_266/_266/_266": OmitFunctions<{
  message: string
}>;
"mocks/_15/_15/_15/_15/_15/_15/_15": OmitFunctions<{
  message: string
}>;
"mocks/_47/_47/_47/_47/_47/_47": OmitFunctions<{
  message: string
}>;
"mocks/_38/_38/_38/_38/_38/_38/_38/_38/_38": OmitFunctions<{
  message: string
}>;
"mocks/_467/_467/_467/_467": OmitFunctions<{
  message: string
}>;
"mocks/_49/_49/_49/_49/_49/_49/_49/_49/_49": OmitFunctions<{
  message: string
}>;
"mocks/_59/_59/_59": OmitFunctions<{
  message: string
}>;
"mocks/_366": OmitFunctions<{
  message: string
}>;
"mocks/_297/_297/_297/_297/_297/_297/_297": OmitFunctions<{
  message: string
}>;
"mocks/_381/_381/_381": OmitFunctions<{
  message: string
}>;
"mocks/_121/_121/_121/_121/_121/_121/_121/_121": OmitFunctions<{
  message: string
}>;
"mocks/_289/_289/_289/_289/_289": OmitFunctions<{
  message: string
}>;
"mocks/_174/_174": OmitFunctions<{
  message: string
}>;
"mocks/_352/_352/_352/_352/_352": OmitFunctions<{
  message: string
}>;
"mocks/_55/_55": OmitFunctions<{
  message: string
}>;
"mocks/_24/_24/_24/_24/_24/_24/_24/_24/_24": OmitFunctions<{
  message: string
}>;
"mocks/_332/_332/_332/_332": OmitFunctions<{
  message: string
}>;
"mocks/_404/_404/_404/_404": OmitFunctions<{
  message: string
}>;
"mocks/_293/_293/_293/_293/_293/_293": OmitFunctions<{
  message: string
}>;
"mocks/_437/_437/_437/_437/_437/_437": OmitFunctions<{
  message: string
}>;
"mocks/_429/_429/_429/_429/_429/_429/_429": OmitFunctions<{
  message: string
}>;
"mocks/_432": OmitFunctions<{
  message: string
}>;
"mocks/_151/_151/_151/_151/_151/_151": OmitFunctions<{
  message: string
}>;
"mocks/_8/_8/_8/_8/_8/_8/_8/_8/_8": OmitFunctions<{
  message: string
}>;
"mocks/_210/_210/_210/_210/_210/_210/_210": OmitFunctions<{
  message: string
}>;
"mocks/_138/_138/_138/_138": OmitFunctions<{
  message: string
}>;
"mocks/_99/_99/_99/_99": OmitFunctions<{
  message: string
}>;
"mocks/_179/_179/_179/_179/_179/_179": OmitFunctions<{
  message: string
}>;
"mocks/_58/_58/_58/_58": OmitFunctions<{
  message: string
}>;
"mocks/_237/_237/_237/_237": OmitFunctions<{
  message: string
}>;
"mocks/_255/_255/_255/_255/_255": OmitFunctions<{
  message: string
}>;
"mocks/_244/_244/_244": OmitFunctions<{
  message: string
}>;
"mocks/_125/_125/_125/_125/_125/_125/_125": OmitFunctions<{
  message: string
}>;
"mocks/_66/_66/_66": OmitFunctions<{
  message: string
}>;
"mocks/_499/_499/_499/_499/_499": OmitFunctions<{
  message: string
}>;
"mocks/_182/_182/_182/_182": OmitFunctions<{
  message: string
}>;
"mocks/_287/_287/_287/_287/_287": OmitFunctions<{
  message: string
}>;
"mocks/_310/_310": OmitFunctions<{
  message: string
}>;
"mocks/_41/_41": OmitFunctions<{
  message: string
}>;
"mocks/_470/_470/_470/_470/_470/_470": OmitFunctions<{
  message: string
}>;
"mocks/_203": OmitFunctions<{
  message: string
}>;
"mocks/_382/_382/_382/_382/_382/_382/_382/_382/_382": OmitFunctions<{
  message: string
}>;
"mocks/_452/_452/_452/_452/_452/_452/_452": OmitFunctions<{
  message: string
}>;
"mocks/_486/_486": OmitFunctions<{
  message: string
}>;
};

export type AsyncEmitResponseMap = {
[key: `x/${string}`]: OmitFunctions<{
  reply: string;
  body: any
}>;
"": OmitFunctions<{
  reply: string
}>;
"mocks/_433/_433/_433/_433/_433/_433/_433/_433/_433": OmitFunctions<{
  reply: string
}>;
"mocks/_156": OmitFunctions<{
  reply: string
}>;
"mocks/_254/_254/_254/_254": OmitFunctions<{
  reply: string
}>;
"mocks/_378/_378/_378/_378/_378/_378/_378/_378/_378": OmitFunctions<{
  reply: string
}>;
"mocks/_93/_93/_93/_93/_93/_93": OmitFunctions<{
  reply: string
}>;
"mocks/_84/_84/_84/_84/_84/_84/_84/_84/_84": OmitFunctions<{
  reply: string
}>;
"mocks/_102/_102/_102/_102/_102": OmitFunctions<{
  reply: string
}>;
"mocks/_361/_361/_361": OmitFunctions<{
  reply: string
}>;
"mocks/_175/_175/_175/_175/_175/_175/_175/_175": OmitFunctions<{
  reply: string
}>;
"mocks/_20/_20/_20/_20": OmitFunctions<{
  reply: string
}>;
"mocks/_215/_215/_215/_215/_215": OmitFunctions<{
  reply: string
}>;
"mocks/_220/_220/_220/_220/_220/_220/_220/_220/_220": OmitFunctions<{
  reply: string
}>;
"mocks/_405": OmitFunctions<{
  reply: string
}>;
"mocks/_199/_199/_199": OmitFunctions<{
  reply: string
}>;
"mocks/_442/_442/_442/_442/_442/_442/_442/_442/_442": OmitFunctions<{
  reply: string
}>;
"mocks/_198/_198/_198/_198/_198/_198": OmitFunctions<{
  reply: string
}>;
"mocks/_413/_413/_413/_413/_413/_413/_413": OmitFunctions<{
  reply: string
}>;
"mocks/_216/_216/_216/_216": OmitFunctions<{
  reply: string
}>;
"mocks/_298/_298/_298/_298/_298/_298/_298": OmitFunctions<{
  reply: string
}>;
"mocks/_185/_185/_185/_185/_185": OmitFunctions<{
  reply: string
}>;
"mocks/_160/_160/_160": OmitFunctions<{
  reply: string
}>;
"mocks/_362/_362/_362": OmitFunctions<{
  reply: string
}>;
"mocks/_457/_457/_457/_457/_457/_457/_457/_457": OmitFunctions<{
  reply: string
}>;
"mocks/_72/_72": OmitFunctions<{
  reply: string
}>;
"mocks/_463/_463/_463/_463": OmitFunctions<{
  reply: string
}>;
"mocks/_314/_314/_314/_314": OmitFunctions<{
  reply: string
}>;
"mocks/_449/_449/_449/_449/_449/_449/_449": OmitFunctions<{
  reply: string
}>;
"mocks/_169/_169": OmitFunctions<{
  reply: string
}>;
"mocks/_472/_472/_472/_472/_472/_472/_472": OmitFunctions<{
  reply: string
}>;
"mocks/_458/_458/_458/_458/_458/_458/_458": OmitFunctions<{
  reply: string
}>;
"mocks/_474/_474/_474/_474/_474/_474": OmitFunctions<{
  reply: string
}>;
"mocks/_465/_465/_465/_465/_465/_465/_465/_465/_465": OmitFunctions<{
  reply: string
}>;
"mocks/_272/_272/_272/_272/_272/_272/_272": OmitFunctions<{
  reply: string
}>;
"mocks/_150/_150/_150/_150/_150/_150/_150": OmitFunctions<{
  reply: string
}>;
"mocks/_450/_450/_450": OmitFunctions<{
  reply: string
}>;
"mocks/_487/_487/_487/_487": OmitFunctions<{
  reply: string
}>;
"mocks/_28/_28/_28/_28": OmitFunctions<{
  reply: string
}>;
"mocks/_133/_133/_133/_133/_133": OmitFunctions<{
  reply: string
}>;
"mocks/_143/_143/_143/_143": OmitFunctions<{
  reply: string
}>;
"mocks/_26/_26/_26/_26/_26/_26/_26": OmitFunctions<{
  reply: string
}>;
"mocks/_424/_424/_424/_424": OmitFunctions<{
  reply: string
}>;
"mocks/_455/_455": OmitFunctions<{
  reply: string
}>;
"mocks/_306/_306/_306": OmitFunctions<{
  reply: string
}>;
"mocks/_109/_109/_109/_109/_109": OmitFunctions<{
  reply: string
}>;
"mocks/_98/_98/_98/_98/_98/_98/_98/_98/_98": OmitFunctions<{
  reply: string
}>;
"mocks/_319/_319/_319/_319/_319/_319/_319/_319/_319": OmitFunctions<{
  reply: string
}>;
"mocks/_256/_256": OmitFunctions<{
  reply: string
}>;
"mocks/_219/_219/_219/_219/_219": OmitFunctions<{
  reply: string
}>;
"mocks/_152/_152/_152/_152/_152": OmitFunctions<{
  reply: string
}>;
"mocks/_205/_205/_205/_205/_205/_205/_205/_205": OmitFunctions<{
  reply: string
}>;
"mocks/_131/_131/_131/_131/_131/_131": OmitFunctions<{
  reply: string
}>;
"mocks/_374": OmitFunctions<{
  reply: string
}>;
"mocks/_200/_200/_200/_200": OmitFunctions<{
  reply: string
}>;
"mocks/_207/_207/_207/_207": OmitFunctions<{
  reply: string
}>;
"mocks/_18/_18/_18/_18/_18": OmitFunctions<{
  reply: string
}>;
"mocks/_243/_243/_243/_243/_243": OmitFunctions<{
  reply: string
}>;
"mocks/_312/_312/_312/_312": OmitFunctions<{
  reply: string
}>;
"mocks/_330/_330": OmitFunctions<{
  reply: string
}>;
"mocks/_421/_421/_421": OmitFunctions<{
  reply: string
}>;
"mocks/_153/_153/_153/_153/_153/_153/_153": OmitFunctions<{
  reply: string
}>;
"mocks/_341/_341": OmitFunctions<{
  reply: string
}>;
"mocks/_4/_4/_4/_4/_4/_4": OmitFunctions<{
  reply: string
}>;
"mocks/_480/_480/_480/_480/_480": OmitFunctions<{
  reply: string
}>;
"mocks/_453": OmitFunctions<{
  reply: string
}>;
"mocks/_268/_268/_268/_268/_268/_268/_268": OmitFunctions<{
  reply: string
}>;
"mocks/_142/_142/_142/_142/_142/_142/_142/_142": OmitFunctions<{
  reply: string
}>;
"mocks/_427/_427/_427/_427/_427/_427/_427/_427": OmitFunctions<{
  reply: string
}>;
"mocks/_245/_245/_245/_245/_245": OmitFunctions<{
  reply: string
}>;
"mocks/_127/_127/_127/_127/_127/_127/_127/_127/_127": OmitFunctions<{
  reply: string
}>;
"mocks/_300": OmitFunctions<{
  reply: string
}>;
"mocks/_280": OmitFunctions<{
  reply: string
}>;
"mocks/_60/_60/_60/_60": OmitFunctions<{
  reply: string
}>;
"mocks/_13": OmitFunctions<{
  reply: string
}>;
"mocks/_390/_390/_390/_390/_390/_390/_390/_390": OmitFunctions<{
  reply: string
}>;
"mocks/_135/_135": OmitFunctions<{
  reply: string
}>;
"mocks/_408/_408/_408/_408/_408/_408/_408/_408": OmitFunctions<{
  reply: string
}>;
"mocks/_173/_173/_173": OmitFunctions<{
  reply: string
}>;
"mocks/_425/_425/_425/_425/_425/_425/_425": OmitFunctions<{
  reply: string
}>;
"mocks/_196/_196/_196/_196": OmitFunctions<{
  reply: string
}>;
"mocks/_347/_347/_347/_347/_347/_347": OmitFunctions<{
  reply: string
}>;
"mocks/_409/_409/_409/_409/_409/_409": OmitFunctions<{
  reply: string
}>;
"mocks/_88": OmitFunctions<{
  reply: string
}>;
"mocks/_373": OmitFunctions<{
  reply: string
}>;
"mocks/_253/_253/_253/_253/_253": OmitFunctions<{
  reply: string
}>;
"mocks/_78/_78/_78/_78": OmitFunctions<{
  reply: string
}>;
"mocks/_282/_282/_282/_282/_282/_282/_282/_282": OmitFunctions<{
  reply: string
}>;
"mocks/_294/_294/_294/_294/_294": OmitFunctions<{
  reply: string
}>;
"mocks/_52/_52/_52/_52/_52/_52/_52": OmitFunctions<{
  reply: string
}>;
"mocks/_398/_398/_398/_398/_398/_398": OmitFunctions<{
  reply: string
}>;
"mocks/_170/_170/_170/_170/_170/_170/_170": OmitFunctions<{
  reply: string
}>;
"mocks/_116": OmitFunctions<{
  reply: string
}>;
"mocks/_403/_403/_403/_403/_403": OmitFunctions<{
  reply: string
}>;
"mocks/_190/_190": OmitFunctions<{
  reply: string
}>;
"mocks/_222": OmitFunctions<{
  reply: string
}>;
"mocks/_327/_327/_327/_327/_327/_327/_327/_327/_327": OmitFunctions<{
  reply: string
}>;
"mocks/_154/_154/_154": OmitFunctions<{
  reply: string
}>;
"mocks/_410/_410/_410": OmitFunctions<{
  reply: string
}>;
"mocks/_422": OmitFunctions<{
  reply: string
}>;
"mocks/_415/_415/_415/_415/_415": OmitFunctions<{
  reply: string
}>;
"mocks/_358/_358/_358/_358/_358": OmitFunctions<{
  reply: string
}>;
"mocks/_43": OmitFunctions<{
  reply: string
}>;
"mocks/_492/_492": OmitFunctions<{
  reply: string
}>;
"mocks/_434/_434/_434/_434/_434": OmitFunctions<{
  reply: string
}>;
"mocks/_39/_39/_39/_39": OmitFunctions<{
  reply: string
}>;
"mocks/_122/_122/_122/_122/_122/_122/_122/_122": OmitFunctions<{
  reply: string
}>;
"mocks/_364/_364/_364/_364/_364/_364/_364/_364/_364": OmitFunctions<{
  reply: string
}>;
"mocks/_89/_89/_89": OmitFunctions<{
  reply: string
}>;
"mocks/_372/_372/_372/_372/_372": OmitFunctions<{
  reply: string
}>;
"mocks/_380/_380/_380/_380": OmitFunctions<{
  reply: string
}>;
"mocks/_23/_23/_23/_23": OmitFunctions<{
  reply: string
}>;
"mocks/_251/_251/_251/_251/_251/_251/_251/_251": OmitFunctions<{
  reply: string
}>;
"mocks/_193": OmitFunctions<{
  reply: string
}>;
"mocks/_186/_186/_186/_186/_186/_186": OmitFunctions<{
  reply: string
}>;
"mocks/_428/_428/_428/_428/_428/_428/_428/_428/_428": OmitFunctions<{
  reply: string
}>;
"mocks/_103/_103/_103/_103/_103/_103/_103": OmitFunctions<{
  reply: string
}>;
"mocks/_488/_488/_488/_488": OmitFunctions<{
  reply: string
}>;
"mocks/_17": OmitFunctions<{
  reply: string
}>;
"mocks/_454/_454/_454/_454/_454/_454/_454/_454": OmitFunctions<{
  reply: string
}>;
"mocks/_311/_311/_311/_311/_311/_311/_311/_311": OmitFunctions<{
  reply: string
}>;
"mocks/_42/_42/_42": OmitFunctions<{
  reply: string
}>;
"mocks/_249": OmitFunctions<{
  reply: string
}>;
"mocks/_284/_284/_284/_284": OmitFunctions<{
  reply: string
}>;
"mocks/_86/_86": OmitFunctions<{
  reply: string
}>;
"mocks/_477/_477/_477/_477": OmitFunctions<{
  reply: string
}>;
"mocks/_441/_441/_441": OmitFunctions<{
  reply: string
}>;
"mocks/_414/_414/_414/_414/_414/_414": OmitFunctions<{
  reply: string
}>;
"mocks/_27/_27/_27/_27/_27/_27": OmitFunctions<{
  reply: string
}>;
"mocks/_164/_164/_164/_164/_164/_164/_164/_164/_164": OmitFunctions<{
  reply: string
}>;
"mocks/_320/_320/_320/_320/_320/_320/_320/_320/_320": OmitFunctions<{
  reply: string
}>;
"mocks/_494/_494/_494/_494/_494": OmitFunctions<{
  reply: string
}>;
"mocks/_120/_120/_120/_120/_120/_120/_120": OmitFunctions<{
  reply: string
}>;
"mocks/_107/_107/_107/_107": OmitFunctions<{
  reply: string
}>;
"mocks/_211": OmitFunctions<{
  reply: string
}>;
"mocks/_100/_100/_100/_100/_100/_100": OmitFunctions<{
  reply: string
}>;
"mocks/_92/_92": OmitFunctions<{
  reply: string
}>;
"mocks/_252": OmitFunctions<{
  reply: string
}>;
"mocks/_495/_495/_495/_495": OmitFunctions<{
  reply: string
}>;
"mocks/_387/_387": OmitFunctions<{
  reply: string
}>;
"mocks/_281/_281/_281": OmitFunctions<{
  reply: string
}>;
"mocks/_318/_318/_318/_318/_318/_318/_318/_318/_318": OmitFunctions<{
  reply: string
}>;
"mocks/_83/_83/_83/_83/_83": OmitFunctions<{
  reply: string
}>;
"mocks/_25/_25/_25/_25/_25/_25": OmitFunctions<{
  reply: string
}>;
"mocks/_278/_278/_278": OmitFunctions<{
  reply: string
}>;
"mocks/_79/_79/_79/_79": OmitFunctions<{
  reply: string
}>;
"mocks/_201/_201/_201/_201/_201/_201/_201/_201": OmitFunctions<{
  reply: string
}>;
"mocks/_402/_402/_402/_402/_402/_402": OmitFunctions<{
  reply: string
}>;
"mocks/_119": OmitFunctions<{
  reply: string
}>;
"mocks/_299/_299/_299/_299/_299/_299/_299": OmitFunctions<{
  reply: string
}>;
"mocks/_3/_3": OmitFunctions<{
  reply: string
}>;
"mocks/_462/_462/_462/_462/_462/_462/_462/_462/_462": OmitFunctions<{
  reply: string
}>;
"mocks/_345/_345/_345/_345/_345": OmitFunctions<{
  reply: string
}>;
"mocks/_233/_233/_233/_233/_233/_233": OmitFunctions<{
  reply: string
}>;
"mocks/_82/_82": OmitFunctions<{
  reply: string
}>;
"mocks/_399/_399/_399/_399/_399/_399": OmitFunctions<{
  reply: string
}>;
"mocks/_9/_9/_9/_9": OmitFunctions<{
  reply: string
}>;
"mocks/_7/_7/_7/_7/_7/_7/_7/_7/_7": OmitFunctions<{
  reply: string
}>;
"mocks/_355/_355/_355/_355/_355/_355/_355/_355": OmitFunctions<{
  reply: string
}>;
"mocks/_34/_34/_34/_34/_34/_34/_34": OmitFunctions<{
  reply: string
}>;
"mocks/_334/_334/_334/_334/_334/_334/_334/_334/_334": OmitFunctions<{
  reply: string
}>;
"mocks/_236/_236/_236/_236/_236/_236/_236/_236": OmitFunctions<{
  reply: string
}>;
"mocks": OmitFunctions<{
  reply: string
}>;
"mocks/_388/_388/_388/_388/_388/_388/_388/_388": OmitFunctions<{
  reply: string
}>;
"mocks/_168/_168/_168/_168/_168/_168/_168/_168/_168": OmitFunctions<{
  reply: string
}>;
"mocks/_307/_307/_307/_307/_307/_307/_307": OmitFunctions<{
  reply: string
}>;
"mocks/_407/_407": OmitFunctions<{
  reply: string
}>;
"mocks/_401/_401/_401/_401/_401/_401/_401/_401/_401": OmitFunctions<{
  reply: string
}>;
"mocks/_46/_46/_46/_46/_46": OmitFunctions<{
  reply: string
}>;
"mocks/_269/_269/_269/_269/_269/_269": OmitFunctions<{
  reply: string
}>;
"mocks/_147": OmitFunctions<{
  reply: string
}>;
"mocks/_369/_369": OmitFunctions<{
  reply: string
}>;
"mocks/_171/_171": OmitFunctions<{
  reply: string
}>;
"mocks/_353/_353/_353/_353": OmitFunctions<{
  reply: string
}>;
"mocks/_111/_111/_111/_111/_111/_111/_111": OmitFunctions<{
  reply: string
}>;
"mocks/_417/_417/_417": OmitFunctions<{
  reply: string
}>;
"mocks/_218": OmitFunctions<{
  reply: string
}>;
"mocks/_65/_65/_65": OmitFunctions<{
  reply: string
}>;
"mocks/_177/_177/_177/_177/_177/_177/_177/_177": OmitFunctions<{
  reply: string
}>;
"mocks/_232/_232/_232/_232/_232/_232/_232/_232/_232": OmitFunctions<{
  reply: string
}>;
"mocks/_181/_181/_181/_181/_181/_181": OmitFunctions<{
  reply: string
}>;
"mocks/_338/_338/_338/_338/_338/_338/_338": OmitFunctions<{
  reply: string
}>;
"mocks/_431/_431/_431": OmitFunctions<{
  reply: string
}>;
"mocks/_80/_80/_80/_80/_80/_80": OmitFunctions<{
  reply: string
}>;
"mocks/_31/_31/_31/_31/_31/_31/_31/_31": OmitFunctions<{
  reply: string
}>;
"mocks/_336/_336/_336/_336/_336/_336": OmitFunctions<{
  reply: string
}>;
"mocks/_292/_292/_292/_292/_292/_292/_292/_292": OmitFunctions<{
  reply: string
}>;
"mocks/_110/_110/_110/_110/_110/_110/_110/_110/_110": OmitFunctions<{
  reply: string
}>;
"mocks/_471/_471/_471": OmitFunctions<{
  reply: string
}>;
"mocks/_367/_367/_367/_367/_367/_367/_367/_367/_367": OmitFunctions<{
  reply: string
}>;
"mocks/_490/_490/_490/_490/_490/_490/_490/_490/_490": OmitFunctions<{
  reply: string
}>;
"mocks/_475/_475/_475/_475/_475/_475/_475/_475/_475": OmitFunctions<{
  reply: string
}>;
"mocks/_191/_191/_191": OmitFunctions<{
  reply: string
}>;
"mocks/_340/_340/_340/_340/_340/_340/_340": OmitFunctions<{
  reply: string
}>;
"mocks/_1/_1/_1/_1/_1/_1": OmitFunctions<{
  reply: string
}>;
"mocks/_262/_262/_262/_262/_262/_262/_262/_262": OmitFunctions<{
  reply: string
}>;
"mocks/_187/_187/_187": OmitFunctions<{
  reply: string
}>;
"mocks/_356/_356/_356/_356": OmitFunctions<{
  reply: string
}>;
"mocks/_323/_323/_323/_323": OmitFunctions<{
  reply: string
}>;
"mocks/_326/_326/_326/_326/_326": OmitFunctions<{
  reply: string
}>;
"mocks/_229/_229/_229": OmitFunctions<{
  reply: string
}>;
"mocks/_226/_226/_226/_226/_226/_226/_226/_226": OmitFunctions<{
  reply: string
}>;
"mocks/_90/_90/_90/_90/_90/_90/_90/_90": OmitFunctions<{
  reply: string
}>;
"mocks/_435/_435/_435/_435/_435/_435/_435/_435/_435": OmitFunctions<{
  reply: string
}>;
"mocks/_445/_445/_445/_445/_445/_445": OmitFunctions<{
  reply: string
}>;
"mocks/_95/_95/_95/_95": OmitFunctions<{
  reply: string
}>;
"mocks/_194/_194/_194/_194/_194": OmitFunctions<{
  reply: string
}>;
"mocks/_271": OmitFunctions<{
  reply: string
}>;
"mocks/_137/_137/_137/_137/_137/_137/_137": OmitFunctions<{
  reply: string
}>;
"mocks/_146/_146/_146/_146": OmitFunctions<{
  reply: string
}>;
"mocks/_158/_158/_158/_158/_158/_158/_158/_158": OmitFunctions<{
  reply: string
}>;
"mocks/_188/_188/_188/_188/_188/_188/_188": OmitFunctions<{
  reply: string
}>;
"mocks/_322/_322/_322/_322": OmitFunctions<{
  reply: string
}>;
"mocks/_283/_283/_283/_283/_283/_283/_283/_283": OmitFunctions<{
  reply: string
}>;
"mocks/_126/_126/_126/_126/_126/_126": OmitFunctions<{
  reply: string
}>;
"mocks/_348": OmitFunctions<{
  reply: string
}>;
"mocks/_385": OmitFunctions<{
  reply: string
}>;
"mocks/_315/_315/_315/_315/_315/_315/_315/_315/_315": OmitFunctions<{
  reply: string
}>;
"mocks/_241/_241/_241": OmitFunctions<{
  reply: string
}>;
"mocks/_485": OmitFunctions<{
  reply: string
}>;
"mocks/_32/_32/_32/_32/_32/_32": OmitFunctions<{
  reply: string
}>;
"mocks/_497": OmitFunctions<{
  reply: string
}>;
"mocks/_359/_359/_359/_359/_359/_359/_359/_359/_359": OmitFunctions<{
  reply: string
}>;
"mocks/_316/_316/_316": OmitFunctions<{
  reply: string
}>;
"mocks/_33/_33/_33": OmitFunctions<{
  reply: string
}>;
"mocks/_74/_74/_74/_74/_74/_74/_74/_74/_74": OmitFunctions<{
  reply: string
}>;
"mocks/_416/_416/_416/_416": OmitFunctions<{
  reply: string
}>;
"mocks/_277": OmitFunctions<{
  reply: string
}>;
"mocks/_295/_295/_295/_295": OmitFunctions<{
  reply: string
}>;
"mocks/_178/_178/_178/_178/_178/_178/_178": OmitFunctions<{
  reply: string
}>;
"mocks/_412/_412/_412": OmitFunctions<{
  reply: string
}>;
"mocks/_324/_324/_324/_324/_324/_324/_324/_324/_324": OmitFunctions<{
  reply: string
}>;
"mocks/_148": OmitFunctions<{
  reply: string
}>;
"mocks/_406": OmitFunctions<{
  reply: string
}>;
"mocks/_223/_223/_223/_223": OmitFunctions<{
  reply: string
}>;
"mocks/_11/_11": OmitFunctions<{
  reply: string
}>;
"mocks/_466/_466/_466/_466": OmitFunctions<{
  reply: string
}>;
"mocks/_63": OmitFunctions<{
  reply: string
}>;
"mocks/_35/_35/_35/_35/_35": OmitFunctions<{
  reply: string
}>;
"mocks/_248/_248/_248/_248": OmitFunctions<{
  reply: string
}>;
"mocks/_270/_270/_270/_270/_270/_270/_270": OmitFunctions<{
  reply: string
}>;
"mocks/_263/_263/_263/_263/_263/_263": OmitFunctions<{
  reply: string
}>;
"mocks/_459/_459": OmitFunctions<{
  reply: string
}>;
"mocks/_393/_393/_393/_393": OmitFunctions<{
  reply: string
}>;
"mocks/_426/_426/_426/_426/_426/_426/_426": OmitFunctions<{
  reply: string
}>;
"mocks/_64/_64/_64/_64/_64/_64": OmitFunctions<{
  reply: string
}>;
"mocks/_231/_231/_231/_231/_231/_231/_231": OmitFunctions<{
  reply: string
}>;
"mocks/_489/_489": OmitFunctions<{
  reply: string
}>;
"mocks/_305/_305/_305": OmitFunctions<{
  reply: string
}>;
"mocks/_371/_371/_371/_371/_371/_371/_371/_371/_371": OmitFunctions<{
  reply: string
}>;
"mocks/_344/_344/_344": OmitFunctions<{
  reply: string
}>;
"mocks/_40/_40/_40": OmitFunctions<{
  reply: string
}>;
"mocks/_478/_478/_478": OmitFunctions<{
  reply: string
}>;
"mocks/_349/_349/_349": OmitFunctions<{
  reply: string
}>;
"mocks/_491/_491/_491/_491/_491/_491": OmitFunctions<{
  reply: string
}>;
"mocks/_165/_165/_165/_165/_165/_165": OmitFunctions<{
  reply: string
}>;
"mocks/_6/_6": OmitFunctions<{
  reply: string
}>;
"mocks/_212/_212/_212/_212/_212/_212": OmitFunctions<{
  reply: string
}>;
"mocks/_85/_85/_85/_85/_85": OmitFunctions<{
  reply: string
}>;
"mocks/_128/_128/_128/_128": OmitFunctions<{
  reply: string
}>;
"mocks/_57/_57/_57/_57/_57/_57/_57/_57": OmitFunctions<{
  reply: string
}>;
"mocks/_159/_159": OmitFunctions<{
  reply: string
}>;
"mocks/_461/_461/_461/_461/_461": OmitFunctions<{
  reply: string
}>;
"mocks/_273/_273": OmitFunctions<{
  reply: string
}>;
"mocks/_377/_377": OmitFunctions<{
  reply: string
}>;
"mocks/_444/_444/_444/_444/_444/_444/_444": OmitFunctions<{
  reply: string
}>;
"mocks/_0/_0/_0": OmitFunctions<{
  reply: string
}>;
"mocks/_112/_112/_112": OmitFunctions<{
  reply: string
}>;
"mocks/_214/_214/_214/_214/_214/_214/_214/_214": OmitFunctions<{
  reply: string
}>;
"mocks/_54/_54/_54": OmitFunctions<{
  reply: string
}>;
"mocks/_192/_192/_192/_192/_192": OmitFunctions<{
  reply: string
}>;
"mocks/_10/_10/_10": OmitFunctions<{
  reply: string
}>;
"mocks/_224/_224/_224": OmitFunctions<{
  reply: string
}>;
"mocks/_460/_460/_460/_460/_460/_460/_460/_460": OmitFunctions<{
  reply: string
}>;
"mocks/_5/_5/_5": OmitFunctions<{
  reply: string
}>;
"mocks/_77/_77": OmitFunctions<{
  reply: string
}>;
"mocks/_481/_481/_481": OmitFunctions<{
  reply: string
}>;
"mocks/_195/_195/_195/_195/_195/_195/_195/_195": OmitFunctions<{
  reply: string
}>;
"mocks/_279": OmitFunctions<{
  reply: string
}>;
"mocks/_363/_363/_363/_363/_363/_363/_363": OmitFunctions<{
  reply: string
}>;
"mocks/_386/_386/_386/_386": OmitFunctions<{
  reply: string
}>;
"mocks/_234/_234/_234/_234/_234/_234": OmitFunctions<{
  reply: string
}>;
"mocks/_430/_430/_430/_430/_430/_430/_430/_430/_430": OmitFunctions<{
  reply: string
}>;
"mocks/_346/_346/_346/_346": OmitFunctions<{
  reply: string
}>;
"mocks/_290/_290/_290/_290": OmitFunctions<{
  reply: string
}>;
"mocks/_291/_291/_291/_291/_291/_291": OmitFunctions<{
  reply: string
}>;
"mocks/_288/_288/_288/_288": OmitFunctions<{
  reply: string
}>;
"mocks/_139/_139/_139/_139": OmitFunctions<{
  reply: string
}>;
"mocks/_448/_448/_448/_448": OmitFunctions<{
  reply: string
}>;
"mocks/_296/_296/_296/_296/_296/_296/_296/_296": OmitFunctions<{
  reply: string
}>;
"mocks/_375/_375/_375/_375/_375/_375/_375/_375": OmitFunctions<{
  reply: string
}>;
"mocks/_67/_67/_67/_67/_67/_67": OmitFunctions<{
  reply: string
}>;
"mocks/_91/_91": OmitFunctions<{
  reply: string
}>;
"mocks/_16/_16/_16/_16/_16/_16": OmitFunctions<{
  reply: string
}>;
"mocks/_69/_69/_69/_69/_69": OmitFunctions<{
  reply: string
}>;
"mocks/_157/_157/_157": OmitFunctions<{
  reply: string
}>;
"mocks/_19/_19/_19": OmitFunctions<{
  reply: string
}>;
"mocks/_114/_114/_114/_114/_114/_114/_114/_114/_114": OmitFunctions<{
  reply: string
}>;
"mocks/_235/_235/_235/_235/_235/_235/_235/_235/_235": OmitFunctions<{
  reply: string
}>;
"mocks/_162/_162/_162/_162/_162": OmitFunctions<{
  reply: string
}>;
"mocks/_209/_209/_209/_209/_209/_209/_209/_209": OmitFunctions<{
  reply: string
}>;
"mocks/_370/_370": OmitFunctions<{
  reply: string
}>;
"mocks/_180/_180": OmitFunctions<{
  reply: string
}>;
"mocks/_418/_418/_418/_418": OmitFunctions<{
  reply: string
}>;
"mocks/_331/_331/_331/_331/_331/_331/_331": OmitFunctions<{
  reply: string
}>;
"mocks/_132/_132/_132/_132/_132": OmitFunctions<{
  reply: string
}>;
"mocks/_419/_419/_419/_419/_419/_419": OmitFunctions<{
  reply: string
}>;
"mocks/_397/_397/_397/_397": OmitFunctions<{
  reply: string
}>;
"mocks/_94/_94/_94/_94/_94": OmitFunctions<{
  reply: string
}>;
"mocks/_274/_274/_274/_274/_274/_274/_274": OmitFunctions<{
  reply: string
}>;
"mocks/_115/_115": OmitFunctions<{
  reply: string
}>;
"mocks/_351/_351/_351/_351/_351/_351/_351/_351": OmitFunctions<{
  reply: string
}>;
"mocks/_238/_238/_238/_238": OmitFunctions<{
  reply: string
}>;
"mocks/_206/_206/_206/_206/_206/_206": OmitFunctions<{
  reply: string
}>;
"mocks/_357/_357/_357": OmitFunctions<{
  reply: string
}>;
"mocks/_468/_468": OmitFunctions<{
  reply: string
}>;
"mocks/_167/_167/_167/_167": OmitFunctions<{
  reply: string
}>;
"mocks/_217/_217/_217/_217/_217/_217/_217/_217": OmitFunctions<{
  reply: string
}>;
"mocks/_2/_2/_2/_2/_2": OmitFunctions<{
  reply: string
}>;
"mocks/_144/_144": OmitFunctions<{
  reply: string
}>;
"mocks/_213/_213/_213/_213/_213/_213/_213/_213/_213": OmitFunctions<{
  reply: string
}>;
"mocks/_482/_482/_482/_482/_482/_482": OmitFunctions<{
  reply: string
}>;
"mocks/_22/_22/_22/_22/_22/_22/_22/_22/_22": OmitFunctions<{
  reply: string
}>;
"mocks/_285/_285/_285": OmitFunctions<{
  reply: string
}>;
"mocks/_476/_476/_476/_476/_476/_476/_476": OmitFunctions<{
  reply: string
}>;
"mocks/_440": OmitFunctions<{
  reply: string
}>;
"mocks/_303/_303/_303/_303/_303/_303/_303/_303": OmitFunctions<{
  reply: string
}>;
"mocks/_61/_61": OmitFunctions<{
  reply: string
}>;
"mocks/_395/_395/_395/_395/_395/_395/_395/_395": OmitFunctions<{
  reply: string
}>;
"mocks/_56/_56/_56/_56/_56/_56/_56/_56": OmitFunctions<{
  reply: string
}>;
"mocks/_483/_483/_483/_483/_483/_483/_483/_483/_483": OmitFunctions<{
  reply: string
}>;
"mocks/_496/_496/_496/_496/_496": OmitFunctions<{
  reply: string
}>;
"mocks/_389/_389/_389/_389/_389/_389/_389/_389/_389": OmitFunctions<{
  reply: string
}>;
"mocks/_104/_104/_104": OmitFunctions<{
  reply: string
}>;
"mocks/_304/_304/_304/_304/_304/_304/_304/_304": OmitFunctions<{
  reply: string
}>;
"mocks/_29/_29/_29": OmitFunctions<{
  reply: string
}>;
"mocks/_443/_443/_443/_443": OmitFunctions<{
  reply: string
}>;
"mocks/_337/_337/_337/_337/_337/_337": OmitFunctions<{
  reply: string
}>;
"mocks/_267/_267/_267/_267/_267/_267/_267": OmitFunctions<{
  reply: string
}>;
"mocks/_208/_208/_208/_208/_208/_208/_208": OmitFunctions<{
  reply: string
}>;
"mocks/_189/_189/_189": OmitFunctions<{
  reply: string
}>;
"mocks/_239/_239": OmitFunctions<{
  reply: string
}>;
"mocks/_14": OmitFunctions<{
  reply: string
}>;
"mocks/_354/_354/_354/_354/_354/_354": OmitFunctions<{
  reply: string
}>;
"mocks/_250/_250/_250": OmitFunctions<{
  reply: string
}>;
"mocks/_258/_258/_258/_258/_258/_258/_258/_258": OmitFunctions<{
  reply: string
}>;
"mocks/_479/_479/_479/_479/_479/_479/_479/_479": OmitFunctions<{
  reply: string
}>;
"mocks/_221/_221/_221/_221": OmitFunctions<{
  reply: string
}>;
"mocks/_301/_301/_301/_301/_301/_301/_301": OmitFunctions<{
  reply: string
}>;
"mocks/_183/_183/_183": OmitFunctions<{
  reply: string
}>;
"mocks/_498/_498/_498/_498/_498/_498/_498/_498": OmitFunctions<{
  reply: string
}>;
"mocks/_12/_12/_12/_12/_12": OmitFunctions<{
  reply: string
}>;
"mocks/_286": OmitFunctions<{
  reply: string
}>;
"mocks/_265/_265/_265/_265/_265/_265": OmitFunctions<{
  reply: string
}>;
"mocks/_75": OmitFunctions<{
  reply: string
}>;
"mocks/_96/_96/_96/_96/_96/_96/_96": OmitFunctions<{
  reply: string
}>;
"mocks/_350/_350": OmitFunctions<{
  reply: string
}>;
"mocks/_391/_391/_391": OmitFunctions<{
  reply: string
}>;
"mocks/_51/_51/_51/_51/_51/_51/_51/_51": OmitFunctions<{
  reply: string
}>;
"mocks/_259/_259/_259/_259/_259/_259/_259/_259/_259": OmitFunctions<{
  reply: string
}>;
"mocks/_420/_420": OmitFunctions<{
  reply: string
}>;
"mocks/_117/_117/_117/_117/_117/_117": OmitFunctions<{
  reply: string
}>;
"mocks/_36": OmitFunctions<{
  reply: string
}>;
"mocks/_335": OmitFunctions<{
  reply: string
}>;
"mocks/_113/_113/_113/_113": OmitFunctions<{
  reply: string
}>;
"mocks/_439": OmitFunctions<{
  reply: string
}>;
"mocks/_376/_376/_376/_376/_376/_376/_376": OmitFunctions<{
  reply: string
}>;
"mocks/_261/_261": OmitFunctions<{
  reply: string
}>;
"mocks/_197/_197/_197/_197": OmitFunctions<{
  reply: string
}>;
"mocks/_202/_202/_202/_202": OmitFunctions<{
  reply: string
}>;
"mocks/_451/_451/_451/_451/_451/_451/_451/_451": OmitFunctions<{
  reply: string
}>;
"mocks/_140/_140/_140/_140/_140/_140": OmitFunctions<{
  reply: string
}>;
"mocks/_309/_309/_309/_309": OmitFunctions<{
  reply: string
}>;
"mocks/_392": OmitFunctions<{
  reply: string
}>;
"mocks/_400/_400/_400/_400/_400/_400": OmitFunctions<{
  reply: string
}>;
"mocks/_50/_50/_50/_50/_50/_50/_50/_50": OmitFunctions<{
  reply: string
}>;
"mocks/_436/_436/_436/_436": OmitFunctions<{
  reply: string
}>;
"mocks/_227/_227/_227/_227": OmitFunctions<{
  reply: string
}>;
"mocks/_328/_328/_328/_328": OmitFunctions<{
  reply: string
}>;
"mocks/_360/_360/_360/_360/_360/_360/_360/_360/_360": OmitFunctions<{
  reply: string
}>;
"mocks/_106/_106/_106/_106/_106/_106": OmitFunctions<{
  reply: string
}>;
"mocks/_247/_247/_247/_247/_247/_247": OmitFunctions<{
  reply: string
}>;
"mocks/_48/_48/_48": OmitFunctions<{
  reply: string
}>;
"mocks/_141/_141/_141/_141/_141/_141/_141": OmitFunctions<{
  reply: string
}>;
"mocks/_446/_446/_446/_446/_446/_446": OmitFunctions<{
  reply: string
}>;
"mocks/_365": OmitFunctions<{
  reply: string
}>;
"mocks/_240": OmitFunctions<{
  reply: string
}>;
"mocks/_493": OmitFunctions<{
  reply: string
}>;
"mocks/_105/_105/_105/_105/_105/_105/_105/_105/_105": OmitFunctions<{
  reply: string
}>;
"mocks/_396/_396/_396": OmitFunctions<{
  reply: string
}>;
"mocks/_242/_242/_242": OmitFunctions<{
  reply: string
}>;
"mocks/_447/_447/_447": OmitFunctions<{
  reply: string
}>;
"mocks/_76/_76/_76/_76": OmitFunctions<{
  reply: string
}>;
"mocks/_423/_423/_423/_423/_423": OmitFunctions<{
  reply: string
}>;
"mocks/_473/_473/_473": OmitFunctions<{
  reply: string
}>;
"mocks/_97/_97": OmitFunctions<{
  reply: string
}>;
"mocks/_230/_230/_230/_230": OmitFunctions<{
  reply: string
}>;
"mocks/_264/_264": OmitFunctions<{
  reply: string
}>;
"mocks/_456/_456/_456/_456/_456/_456": OmitFunctions<{
  reply: string
}>;
"mocks/_313/_313/_313/_313/_313/_313/_313": OmitFunctions<{
  reply: string
}>;
"mocks/_136": OmitFunctions<{
  reply: string
}>;
"mocks/_184/_184/_184/_184/_184/_184/_184/_184": OmitFunctions<{
  reply: string
}>;
"mocks/_163": OmitFunctions<{
  reply: string
}>;
"mocks/_228/_228/_228/_228/_228/_228/_228/_228/_228": OmitFunctions<{
  reply: string
}>;
"mocks/_275/_275": OmitFunctions<{
  reply: string
}>;
"mocks/_166/_166/_166": OmitFunctions<{
  reply: string
}>;
"mocks/_108": OmitFunctions<{
  reply: string
}>;
"mocks/_123/_123/_123/_123": OmitFunctions<{
  reply: string
}>;
"mocks/_339/_339/_339/_339/_339/_339/_339/_339/_339": OmitFunctions<{
  reply: string
}>;
"mocks/_411/_411/_411/_411/_411/_411/_411/_411/_411": OmitFunctions<{
  reply: string
}>;
"mocks/_53/_53": OmitFunctions<{
  reply: string
}>;
"mocks/_342/_342/_342/_342": OmitFunctions<{
  reply: string
}>;
"mocks/_204/_204": OmitFunctions<{
  reply: string
}>;
"mocks/_484/_484/_484/_484": OmitFunctions<{
  reply: string
}>;
"mocks/_266/_266/_266/_266/_266/_266": OmitFunctions<{
  reply: string
}>;
"mocks/_15/_15/_15/_15/_15/_15/_15": OmitFunctions<{
  reply: string
}>;
"mocks/_47/_47/_47/_47/_47/_47": OmitFunctions<{
  reply: string
}>;
"mocks/_38/_38/_38/_38/_38/_38/_38/_38/_38": OmitFunctions<{
  reply: string
}>;
"mocks/_467/_467/_467/_467": OmitFunctions<{
  reply: string
}>;
"mocks/_49/_49/_49/_49/_49/_49/_49/_49/_49": OmitFunctions<{
  reply: string
}>;
"mocks/_59/_59/_59": OmitFunctions<{
  reply: string
}>;
"mocks/_366": OmitFunctions<{
  reply: string
}>;
"mocks/_297/_297/_297/_297/_297/_297/_297": OmitFunctions<{
  reply: string
}>;
"mocks/_381/_381/_381": OmitFunctions<{
  reply: string
}>;
"mocks/_121/_121/_121/_121/_121/_121/_121/_121": OmitFunctions<{
  reply: string
}>;
"mocks/_289/_289/_289/_289/_289": OmitFunctions<{
  reply: string
}>;
"mocks/_174/_174": OmitFunctions<{
  reply: string
}>;
"mocks/_352/_352/_352/_352/_352": OmitFunctions<{
  reply: string
}>;
"mocks/_55/_55": OmitFunctions<{
  reply: string
}>;
"mocks/_24/_24/_24/_24/_24/_24/_24/_24/_24": OmitFunctions<{
  reply: string
}>;
"mocks/_332/_332/_332/_332": OmitFunctions<{
  reply: string
}>;
"mocks/_404/_404/_404/_404": OmitFunctions<{
  reply: string
}>;
"mocks/_293/_293/_293/_293/_293/_293": OmitFunctions<{
  reply: string
}>;
"mocks/_437/_437/_437/_437/_437/_437": OmitFunctions<{
  reply: string
}>;
"mocks/_429/_429/_429/_429/_429/_429/_429": OmitFunctions<{
  reply: string
}>;
"mocks/_432": OmitFunctions<{
  reply: string
}>;
"mocks/_151/_151/_151/_151/_151/_151": OmitFunctions<{
  reply: string
}>;
"mocks/_8/_8/_8/_8/_8/_8/_8/_8/_8": OmitFunctions<{
  reply: string
}>;
"mocks/_210/_210/_210/_210/_210/_210/_210": OmitFunctions<{
  reply: string
}>;
"mocks/_138/_138/_138/_138": OmitFunctions<{
  reply: string
}>;
"mocks/_99/_99/_99/_99": OmitFunctions<{
  reply: string
}>;
"mocks/_179/_179/_179/_179/_179/_179": OmitFunctions<{
  reply: string
}>;
"mocks/_58/_58/_58/_58": OmitFunctions<{
  reply: string
}>;
"mocks/_237/_237/_237/_237": OmitFunctions<{
  reply: string
}>;
"mocks/_255/_255/_255/_255/_255": OmitFunctions<{
  reply: string
}>;
"mocks/_244/_244/_244": OmitFunctions<{
  reply: string
}>;
"mocks/_125/_125/_125/_125/_125/_125/_125": OmitFunctions<{
  reply: string
}>;
"mocks/_66/_66/_66": OmitFunctions<{
  reply: string
}>;
"mocks/_499/_499/_499/_499/_499": OmitFunctions<{
  reply: string
}>;
"mocks/_182/_182/_182/_182": OmitFunctions<{
  reply: string
}>;
"mocks/_287/_287/_287/_287/_287": OmitFunctions<{
  reply: string
}>;
"mocks/_310/_310": OmitFunctions<{
  reply: string
}>;
"mocks/_41/_41": OmitFunctions<{
  reply: string
}>;
"mocks/_470/_470/_470/_470/_470/_470": OmitFunctions<{
  reply: string
}>;
"mocks/_203": OmitFunctions<{
  reply: string
}>;
"mocks/_382/_382/_382/_382/_382/_382/_382/_382/_382": OmitFunctions<{
  reply: string
}>;
"mocks/_452/_452/_452/_452/_452/_452/_452": OmitFunctions<{
  reply: string
}>;
"mocks/_486/_486": OmitFunctions<{
  reply: string
}>;
};

export type AsyncEmitBody<U extends string> = U extends keyof AsyncEmitBodyMap ? AsyncEmitBodyMap[U] : any;

export type AsyncEmitResponse<U extends string> = U extends keyof AsyncEmitResponseMap ? AsyncEmitResponseMap[U] : any;

export type AsyncEmit = <U extends AsyncEmitEvents | string>(
    url: U,
    body?: AsyncEmitBody<U>,
    config?: AsyncEmitOptions,
) => Promise<AsyncEmitResponse<U>>;
                    
    


export type ApiPost = <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AsyncEmitOptions & RequestConfig<D>
) => Promise<R>;

            


export type ApiPut = <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AsyncEmitOptions & RequestConfig<D>
) => Promise<R>;

            


         

export type ApiGetUrl = [key: `x/${string}`] | "" | "mocks/_433/_433/_433/_433/_433/_433/_433/_433/_433" | "mocks/_156" | "mocks/_254/_254/_254/_254" | "mocks/_378/_378/_378/_378/_378/_378/_378/_378/_378" | "mocks/_93/_93/_93/_93/_93/_93" | "mocks/_84/_84/_84/_84/_84/_84/_84/_84/_84" | "mocks/_102/_102/_102/_102/_102" | "mocks/_361/_361/_361" | "mocks/_101" | "mocks/_175/_175/_175/_175/_175/_175/_175/_175" | "mocks/_20/_20/_20/_20" | "mocks/_215/_215/_215/_215/_215" | "mocks/_220/_220/_220/_220/_220/_220/_220/_220/_220" | "mocks/_405" | "mocks/_199/_199/_199" | "mocks/_442/_442/_442/_442/_442/_442/_442/_442/_442" | "mocks/_198/_198/_198/_198/_198/_198" | "mocks/_413/_413/_413/_413/_413/_413/_413" | "mocks/_216/_216/_216/_216" | "mocks/_298/_298/_298/_298/_298/_298/_298" | "mocks/_185/_185/_185/_185/_185" | "mocks/_160/_160/_160" | "mocks/_362/_362/_362" | "mocks/_457/_457/_457/_457/_457/_457/_457/_457" | "mocks/_72/_72" | "mocks/_463/_463/_463/_463" | "mocks/_314/_314/_314/_314" | "mocks/_449/_449/_449/_449/_449/_449/_449" | "mocks/_169/_169" | "mocks/_472/_472/_472/_472/_472/_472/_472" | "mocks/_458/_458/_458/_458/_458/_458/_458" | "mocks/_474/_474/_474/_474/_474/_474" | "mocks/_465/_465/_465/_465/_465/_465/_465/_465/_465" | "mocks/_272/_272/_272/_272/_272/_272/_272" | "mocks/_150/_150/_150/_150/_150/_150/_150" | "mocks/_450/_450/_450" | "mocks/_487/_487/_487/_487" | "mocks/_28/_28/_28/_28" | "mocks/_133/_133/_133/_133/_133" | "mocks/_143/_143/_143/_143" | "mocks/_26/_26/_26/_26/_26/_26/_26" | "mocks/_424/_424/_424/_424" | "mocks/_455/_455" | "mocks/_306/_306/_306" | "mocks/_109/_109/_109/_109/_109" | "mocks/_98/_98/_98/_98/_98/_98/_98/_98/_98" | "mocks/_319/_319/_319/_319/_319/_319/_319/_319/_319" | "mocks/_256/_256" | "mocks/_219/_219/_219/_219/_219" | "mocks/_152/_152/_152/_152/_152" | "mocks/_205/_205/_205/_205/_205/_205/_205/_205" | "mocks/_131/_131/_131/_131/_131/_131" | "mocks/_374" | "mocks/_200/_200/_200/_200" | "mocks/_207/_207/_207/_207" | "mocks/_18/_18/_18/_18/_18" | "mocks/_243/_243/_243/_243/_243" | "mocks/_312/_312/_312/_312" | "mocks/_330/_330" | "mocks/_421/_421/_421" | "mocks/_153/_153/_153/_153/_153/_153/_153" | "mocks/_341/_341" | "mocks/_4/_4/_4/_4/_4/_4" | "mocks/_480/_480/_480/_480/_480" | "mocks/_453" | "mocks/_268/_268/_268/_268/_268/_268/_268" | "mocks/_142/_142/_142/_142/_142/_142/_142/_142" | "mocks/_427/_427/_427/_427/_427/_427/_427/_427" | "mocks/_245/_245/_245/_245/_245" | "mocks/_127/_127/_127/_127/_127/_127/_127/_127/_127" | "mocks/_300" | "mocks/_280" | "mocks/_60/_60/_60/_60" | "mocks/_13" | "mocks/_390/_390/_390/_390/_390/_390/_390/_390" | "mocks/_135/_135" | "mocks/_408/_408/_408/_408/_408/_408/_408/_408" | "mocks/_173/_173/_173" | "mocks/_425/_425/_425/_425/_425/_425/_425" | "mocks/_196/_196/_196/_196" | "mocks/_347/_347/_347/_347/_347/_347" | "mocks/_409/_409/_409/_409/_409/_409" | "mocks/_88" | "mocks/_373" | "mocks/_253/_253/_253/_253/_253" | "mocks/_78/_78/_78/_78" | "mocks/_282/_282/_282/_282/_282/_282/_282/_282" | "mocks/_294/_294/_294/_294/_294" | "mocks/_52/_52/_52/_52/_52/_52/_52" | "mocks/_398/_398/_398/_398/_398/_398" | "mocks/_170/_170/_170/_170/_170/_170/_170" | "mocks/_116" | "mocks/_403/_403/_403/_403/_403" | "mocks/_190/_190" | "mocks/_222" | "mocks/_327/_327/_327/_327/_327/_327/_327/_327/_327" | "mocks/_154/_154/_154" | "mocks/_410/_410/_410" | "mocks/_422" | "mocks/_415/_415/_415/_415/_415" | "mocks/_358/_358/_358/_358/_358" | "mocks/_43" | "mocks/_492/_492" | "mocks/_434/_434/_434/_434/_434" | "mocks/_39/_39/_39/_39" | "mocks/_122/_122/_122/_122/_122/_122/_122/_122" | "mocks/_364/_364/_364/_364/_364/_364/_364/_364/_364" | "mocks/_89/_89/_89" | "mocks/_372/_372/_372/_372/_372" | "mocks/_380/_380/_380/_380" | "mocks/_23/_23/_23/_23" | "mocks/_251/_251/_251/_251/_251/_251/_251/_251" | "mocks/_193" | "mocks/_186/_186/_186/_186/_186/_186" | "mocks/_428/_428/_428/_428/_428/_428/_428/_428/_428" | "mocks/_103/_103/_103/_103/_103/_103/_103" | "mocks/_488/_488/_488/_488" | "mocks/_17" | "mocks/_454/_454/_454/_454/_454/_454/_454/_454" | "mocks/_311/_311/_311/_311/_311/_311/_311/_311" | "mocks/_42/_42/_42" | "mocks/_249" | "mocks/_284/_284/_284/_284" | "mocks/_86/_86" | "mocks/_477/_477/_477/_477" | "mocks/_441/_441/_441" | "mocks/_414/_414/_414/_414/_414/_414" | "mocks/_27/_27/_27/_27/_27/_27" | "mocks/_164/_164/_164/_164/_164/_164/_164/_164/_164" | "mocks/_320/_320/_320/_320/_320/_320/_320/_320/_320" | "mocks/_494/_494/_494/_494/_494" | "mocks/_120/_120/_120/_120/_120/_120/_120" | "mocks/_107/_107/_107/_107" | "mocks/_211" | "mocks/_100/_100/_100/_100/_100/_100" | "mocks/_92/_92" | "mocks/_252" | "mocks/_495/_495/_495/_495" | "mocks/_387/_387" | "mocks/_281/_281/_281" | "mocks/_318/_318/_318/_318/_318/_318/_318/_318/_318" | "mocks/_83/_83/_83/_83/_83" | "mocks/_25/_25/_25/_25/_25/_25" | "mocks/_278/_278/_278" | "mocks/_79/_79/_79/_79" | "mocks/_201/_201/_201/_201/_201/_201/_201/_201" | "mocks/_402/_402/_402/_402/_402/_402" | "mocks/_119" | "mocks/_299/_299/_299/_299/_299/_299/_299" | "mocks/_3/_3" | "mocks/_462/_462/_462/_462/_462/_462/_462/_462/_462" | "mocks/_345/_345/_345/_345/_345" | "mocks/_233/_233/_233/_233/_233/_233" | "mocks/_82/_82" | "mocks/_399/_399/_399/_399/_399/_399" | "mocks/_9/_9/_9/_9" | "mocks/_7/_7/_7/_7/_7/_7/_7/_7/_7" | "mocks/_355/_355/_355/_355/_355/_355/_355/_355" | "mocks/_34/_34/_34/_34/_34/_34/_34" | "mocks/_334/_334/_334/_334/_334/_334/_334/_334/_334" | "mocks/_236/_236/_236/_236/_236/_236/_236/_236" | "mocks" | "mocks/_388/_388/_388/_388/_388/_388/_388/_388" | "mocks/_168/_168/_168/_168/_168/_168/_168/_168/_168" | "mocks/_307/_307/_307/_307/_307/_307/_307" | "mocks/_407/_407" | "mocks/_401/_401/_401/_401/_401/_401/_401/_401/_401" | "mocks/_46/_46/_46/_46/_46" | "mocks/_269/_269/_269/_269/_269/_269" | "mocks/_147" | "mocks/_369/_369" | "mocks/_171/_171" | "mocks/_353/_353/_353/_353" | "mocks/_111/_111/_111/_111/_111/_111/_111" | "mocks/_417/_417/_417" | "mocks/_218" | "mocks/_65/_65/_65" | "mocks/_177/_177/_177/_177/_177/_177/_177/_177" | "mocks/_232/_232/_232/_232/_232/_232/_232/_232/_232" | "mocks/_181/_181/_181/_181/_181/_181" | "mocks/_338/_338/_338/_338/_338/_338/_338" | "mocks/_431/_431/_431" | "mocks/_80/_80/_80/_80/_80/_80" | "mocks/_31/_31/_31/_31/_31/_31/_31/_31" | "mocks/_336/_336/_336/_336/_336/_336" | "mocks/_292/_292/_292/_292/_292/_292/_292/_292" | "mocks/_110/_110/_110/_110/_110/_110/_110/_110/_110" | "mocks/_471/_471/_471" | "mocks/_367/_367/_367/_367/_367/_367/_367/_367/_367" | "mocks/_490/_490/_490/_490/_490/_490/_490/_490/_490" | "mocks/_475/_475/_475/_475/_475/_475/_475/_475/_475" | "mocks/_191/_191/_191" | "mocks/_340/_340/_340/_340/_340/_340/_340" | "mocks/_1/_1/_1/_1/_1/_1" | "mocks/_262/_262/_262/_262/_262/_262/_262/_262" | "mocks/_187/_187/_187" | "mocks/_356/_356/_356/_356" | "mocks/_323/_323/_323/_323" | "mocks/_326/_326/_326/_326/_326" | "mocks/_229/_229/_229" | "mocks/_226/_226/_226/_226/_226/_226/_226/_226" | "mocks/_90/_90/_90/_90/_90/_90/_90/_90" | "mocks/_435/_435/_435/_435/_435/_435/_435/_435/_435" | "mocks/_445/_445/_445/_445/_445/_445" | "mocks/_95/_95/_95/_95" | "mocks/_194/_194/_194/_194/_194" | "mocks/_271" | "mocks/_137/_137/_137/_137/_137/_137/_137" | "mocks/_146/_146/_146/_146" | "mocks/_158/_158/_158/_158/_158/_158/_158/_158" | "mocks/_188/_188/_188/_188/_188/_188/_188" | "mocks/_322/_322/_322/_322" | "mocks/_283/_283/_283/_283/_283/_283/_283/_283" | "mocks/_126/_126/_126/_126/_126/_126" | "mocks/_348" | "mocks/_385" | "mocks/_315/_315/_315/_315/_315/_315/_315/_315/_315" | "mocks/_241/_241/_241" | "mocks/_485" | "mocks/_32/_32/_32/_32/_32/_32" | "mocks/_497" | "mocks/_359/_359/_359/_359/_359/_359/_359/_359/_359" | "mocks/_316/_316/_316" | "mocks/_33/_33/_33" | "mocks/_74/_74/_74/_74/_74/_74/_74/_74/_74" | "mocks/_416/_416/_416/_416" | "mocks/_277" | "mocks/_295/_295/_295/_295" | "mocks/_178/_178/_178/_178/_178/_178/_178" | "mocks/_412/_412/_412" | "mocks/_324/_324/_324/_324/_324/_324/_324/_324/_324" | "mocks/_148" | "mocks/_406" | "mocks/_223/_223/_223/_223" | "mocks/_11/_11" | "mocks/_466/_466/_466/_466" | "mocks/_63" | "mocks/_35/_35/_35/_35/_35" | "mocks/_248/_248/_248/_248" | "mocks/_270/_270/_270/_270/_270/_270/_270" | "mocks/_263/_263/_263/_263/_263/_263" | "mocks/_459/_459" | "mocks/_393/_393/_393/_393" | "mocks/_426/_426/_426/_426/_426/_426/_426" | "mocks/_64/_64/_64/_64/_64/_64" | "mocks/_231/_231/_231/_231/_231/_231/_231" | "mocks/_489/_489" | "mocks/_305/_305/_305" | "mocks/_371/_371/_371/_371/_371/_371/_371/_371/_371" | "mocks/_344/_344/_344" | "mocks/_40/_40/_40" | "mocks/_478/_478/_478" | "mocks/_349/_349/_349" | "mocks/_491/_491/_491/_491/_491/_491" | "mocks/_165/_165/_165/_165/_165/_165" | "mocks/_6/_6" | "mocks/_212/_212/_212/_212/_212/_212" | "mocks/_85/_85/_85/_85/_85" | "mocks/_128/_128/_128/_128" | "mocks/_57/_57/_57/_57/_57/_57/_57/_57" | "mocks/_159/_159" | "mocks/_461/_461/_461/_461/_461" | "mocks/_273/_273" | "mocks/_377/_377" | "mocks/_444/_444/_444/_444/_444/_444/_444" | "mocks/_0/_0/_0" | "mocks/_112/_112/_112" | "mocks/_214/_214/_214/_214/_214/_214/_214/_214" | "mocks/_54/_54/_54" | "mocks/_192/_192/_192/_192/_192" | "mocks/_10/_10/_10" | "mocks/_224/_224/_224" | "mocks/_460/_460/_460/_460/_460/_460/_460/_460" | "mocks/_5/_5/_5" | "mocks/_77/_77" | "mocks/_481/_481/_481" | "mocks/_195/_195/_195/_195/_195/_195/_195/_195" | "mocks/_279" | "mocks/_363/_363/_363/_363/_363/_363/_363" | "mocks/_386/_386/_386/_386" | "mocks/_234/_234/_234/_234/_234/_234" | "mocks/_430/_430/_430/_430/_430/_430/_430/_430/_430" | "mocks/_346/_346/_346/_346" | "mocks/_290/_290/_290/_290" | "mocks/_291/_291/_291/_291/_291/_291" | "mocks/_288/_288/_288/_288" | "mocks/_139/_139/_139/_139" | "mocks/_448/_448/_448/_448" | "mocks/_296/_296/_296/_296/_296/_296/_296/_296" | "mocks/_375/_375/_375/_375/_375/_375/_375/_375" | "mocks/_67/_67/_67/_67/_67/_67" | "mocks/_91/_91" | "mocks/_16/_16/_16/_16/_16/_16" | "mocks/_69/_69/_69/_69/_69" | "mocks/_157/_157/_157" | "mocks/_19/_19/_19" | "mocks/_114/_114/_114/_114/_114/_114/_114/_114/_114" | "mocks/_235/_235/_235/_235/_235/_235/_235/_235/_235" | "mocks/_162/_162/_162/_162/_162" | "mocks/_209/_209/_209/_209/_209/_209/_209/_209" | "mocks/_370/_370" | "mocks/_180/_180" | "mocks/_418/_418/_418/_418" | "mocks/_331/_331/_331/_331/_331/_331/_331" | "mocks/_132/_132/_132/_132/_132" | "mocks/_419/_419/_419/_419/_419/_419" | "mocks/_397/_397/_397/_397" | "mocks/_94/_94/_94/_94/_94" | "mocks/_274/_274/_274/_274/_274/_274/_274" | "mocks/_115/_115" | "mocks/_351/_351/_351/_351/_351/_351/_351/_351" | "mocks/_238/_238/_238/_238" | "mocks/_206/_206/_206/_206/_206/_206" | "mocks/_357/_357/_357" | "mocks/_468/_468" | "mocks/_167/_167/_167/_167" | "mocks/_217/_217/_217/_217/_217/_217/_217/_217" | "mocks/_2/_2/_2/_2/_2" | "mocks/_144/_144" | "mocks/_213/_213/_213/_213/_213/_213/_213/_213/_213" | "mocks/_482/_482/_482/_482/_482/_482" | "mocks/_22/_22/_22/_22/_22/_22/_22/_22/_22" | "mocks/_285/_285/_285" | "mocks/_476/_476/_476/_476/_476/_476/_476" | "mocks/_440" | "mocks/_303/_303/_303/_303/_303/_303/_303/_303" | "mocks/_61/_61" | "mocks/_395/_395/_395/_395/_395/_395/_395/_395" | "mocks/_56/_56/_56/_56/_56/_56/_56/_56" | "mocks/_483/_483/_483/_483/_483/_483/_483/_483/_483" | "mocks/_496/_496/_496/_496/_496" | "mocks/_389/_389/_389/_389/_389/_389/_389/_389/_389" | "mocks/_104/_104/_104" | "mocks/_304/_304/_304/_304/_304/_304/_304/_304" | "mocks/_29/_29/_29" | "mocks/_443/_443/_443/_443" | "mocks/_337/_337/_337/_337/_337/_337" | "mocks/_267/_267/_267/_267/_267/_267/_267" | "mocks/_208/_208/_208/_208/_208/_208/_208" | "mocks/_189/_189/_189" | "mocks/_239/_239" | "mocks/_14" | "mocks/_354/_354/_354/_354/_354/_354" | "mocks/_250/_250/_250" | "mocks/_258/_258/_258/_258/_258/_258/_258/_258" | "mocks/_479/_479/_479/_479/_479/_479/_479/_479" | "mocks/_221/_221/_221/_221" | "mocks/_301/_301/_301/_301/_301/_301/_301" | "mocks/_183/_183/_183" | "mocks/_498/_498/_498/_498/_498/_498/_498/_498" | "mocks/_12/_12/_12/_12/_12" | "mocks/_286" | "mocks/_265/_265/_265/_265/_265/_265" | "mocks/_75" | "mocks/_96/_96/_96/_96/_96/_96/_96" | "mocks/_350/_350" | "mocks/_391/_391/_391" | "mocks/_51/_51/_51/_51/_51/_51/_51/_51" | "mocks/_259/_259/_259/_259/_259/_259/_259/_259/_259" | "mocks/_420/_420" | "mocks/_117/_117/_117/_117/_117/_117" | "mocks/_36" | "mocks/_335" | "mocks/_113/_113/_113/_113" | "mocks/_439" | "mocks/_376/_376/_376/_376/_376/_376/_376" | "mocks/_261/_261" | "mocks/_197/_197/_197/_197" | "mocks/_202/_202/_202/_202" | "mocks/_451/_451/_451/_451/_451/_451/_451/_451" | "mocks/_140/_140/_140/_140/_140/_140" | "mocks/_309/_309/_309/_309" | "mocks/_392" | "mocks/_400/_400/_400/_400/_400/_400" | "mocks/_50/_50/_50/_50/_50/_50/_50/_50" | "mocks/_436/_436/_436/_436" | "mocks/_227/_227/_227/_227" | "mocks/_328/_328/_328/_328" | "mocks/_360/_360/_360/_360/_360/_360/_360/_360/_360" | "mocks/_106/_106/_106/_106/_106/_106" | "mocks/_247/_247/_247/_247/_247/_247" | "mocks/_48/_48/_48" | "mocks/_141/_141/_141/_141/_141/_141/_141" | "mocks/_446/_446/_446/_446/_446/_446" | "mocks/_365" | "mocks/_240" | "mocks/_493" | "mocks/_105/_105/_105/_105/_105/_105/_105/_105/_105" | "mocks/_396/_396/_396" | "mocks/_242/_242/_242" | "mocks/_447/_447/_447" | "mocks/_76/_76/_76/_76" | "mocks/_423/_423/_423/_423/_423" | "mocks/_473/_473/_473" | "mocks/_97/_97" | "mocks/_230/_230/_230/_230" | "mocks/_264/_264" | "mocks/_456/_456/_456/_456/_456/_456" | "mocks/_313/_313/_313/_313/_313/_313/_313" | "mocks/_136" | "mocks/_184/_184/_184/_184/_184/_184/_184/_184" | "mocks/_163" | "mocks/_228/_228/_228/_228/_228/_228/_228/_228/_228" | "mocks/_275/_275" | "mocks/_166/_166/_166" | "mocks/_108" | "mocks/_123/_123/_123/_123" | "mocks/_339/_339/_339/_339/_339/_339/_339/_339/_339" | "mocks/_411/_411/_411/_411/_411/_411/_411/_411/_411" | "mocks/_53/_53" | "mocks/_342/_342/_342/_342" | "mocks/_204/_204" | "mocks/_484/_484/_484/_484" | "mocks/_266/_266/_266/_266/_266/_266" | "mocks/_15/_15/_15/_15/_15/_15/_15" | "mocks/_47/_47/_47/_47/_47/_47" | "mocks/_38/_38/_38/_38/_38/_38/_38/_38/_38" | "mocks/_467/_467/_467/_467" | "mocks/_49/_49/_49/_49/_49/_49/_49/_49/_49" | "mocks/_59/_59/_59" | "mocks/_366" | "mocks/_297/_297/_297/_297/_297/_297/_297" | "mocks/_381/_381/_381" | "mocks/_121/_121/_121/_121/_121/_121/_121/_121" | "mocks/_289/_289/_289/_289/_289" | "mocks/_174/_174" | "mocks/_352/_352/_352/_352/_352" | "mocks/_55/_55" | "mocks/_24/_24/_24/_24/_24/_24/_24/_24/_24" | "mocks/_332/_332/_332/_332" | "mocks/_404/_404/_404/_404" | "mocks/_293/_293/_293/_293/_293/_293" | "mocks/_437/_437/_437/_437/_437/_437" | "mocks/_429/_429/_429/_429/_429/_429/_429" | "mocks/_432" | "mocks/_151/_151/_151/_151/_151/_151" | "mocks/_8/_8/_8/_8/_8/_8/_8/_8/_8" | "mocks/_210/_210/_210/_210/_210/_210/_210" | "mocks/_138/_138/_138/_138" | "mocks/_99/_99/_99/_99" | "mocks/_179/_179/_179/_179/_179/_179" | "mocks/_58/_58/_58/_58" | "mocks/_237/_237/_237/_237" | "mocks/_255/_255/_255/_255/_255" | "mocks/_244/_244/_244" | "mocks/_125/_125/_125/_125/_125/_125/_125" | "mocks/_66/_66/_66" | "mocks/_499/_499/_499/_499/_499" | "mocks/_182/_182/_182/_182" | "mocks/_287/_287/_287/_287/_287" | "mocks/_310/_310" | "mocks/_41/_41" | "mocks/_470/_470/_470/_470/_470/_470" | "mocks/_203" | "mocks/_382/_382/_382/_382/_382/_382/_382/_382/_382" | "mocks/_452/_452/_452/_452/_452/_452/_452" | "mocks/_486/_486";

export type ApiGetBodyMap = {
[key: `x/${string}`]: OmitFunctions<{
  msg: "Hello, World!"
}>;
"": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_433/_433/_433/_433/_433/_433/_433/_433/_433": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_156": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_254/_254/_254/_254": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_378/_378/_378/_378/_378/_378/_378/_378/_378": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_93/_93/_93/_93/_93/_93": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_84/_84/_84/_84/_84/_84/_84/_84/_84": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_102/_102/_102/_102/_102": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_361/_361/_361": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_101": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_175/_175/_175/_175/_175/_175/_175/_175": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_20/_20/_20/_20": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_215/_215/_215/_215/_215": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_220/_220/_220/_220/_220/_220/_220/_220/_220": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_405": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_199/_199/_199": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_442/_442/_442/_442/_442/_442/_442/_442/_442": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_198/_198/_198/_198/_198/_198": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_413/_413/_413/_413/_413/_413/_413": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_216/_216/_216/_216": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_298/_298/_298/_298/_298/_298/_298": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_185/_185/_185/_185/_185": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_160/_160/_160": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_362/_362/_362": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_457/_457/_457/_457/_457/_457/_457/_457": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_72/_72": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_463/_463/_463/_463": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_314/_314/_314/_314": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_449/_449/_449/_449/_449/_449/_449": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_169/_169": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_472/_472/_472/_472/_472/_472/_472": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_458/_458/_458/_458/_458/_458/_458": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_474/_474/_474/_474/_474/_474": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_465/_465/_465/_465/_465/_465/_465/_465/_465": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_272/_272/_272/_272/_272/_272/_272": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_150/_150/_150/_150/_150/_150/_150": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_450/_450/_450": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_487/_487/_487/_487": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_28/_28/_28/_28": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_133/_133/_133/_133/_133": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_143/_143/_143/_143": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_26/_26/_26/_26/_26/_26/_26": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_424/_424/_424/_424": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_455/_455": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_306/_306/_306": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_109/_109/_109/_109/_109": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_98/_98/_98/_98/_98/_98/_98/_98/_98": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_319/_319/_319/_319/_319/_319/_319/_319/_319": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_256/_256": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_219/_219/_219/_219/_219": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_152/_152/_152/_152/_152": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_205/_205/_205/_205/_205/_205/_205/_205": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_131/_131/_131/_131/_131/_131": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_374": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_200/_200/_200/_200": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_207/_207/_207/_207": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_18/_18/_18/_18/_18": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_243/_243/_243/_243/_243": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_312/_312/_312/_312": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_330/_330": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_421/_421/_421": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_153/_153/_153/_153/_153/_153/_153": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_341/_341": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_4/_4/_4/_4/_4/_4": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_480/_480/_480/_480/_480": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_453": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_268/_268/_268/_268/_268/_268/_268": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_142/_142/_142/_142/_142/_142/_142/_142": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_427/_427/_427/_427/_427/_427/_427/_427": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_245/_245/_245/_245/_245": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_127/_127/_127/_127/_127/_127/_127/_127/_127": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_300": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_280": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_60/_60/_60/_60": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_13": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_390/_390/_390/_390/_390/_390/_390/_390": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_135/_135": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_408/_408/_408/_408/_408/_408/_408/_408": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_173/_173/_173": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_425/_425/_425/_425/_425/_425/_425": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_196/_196/_196/_196": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_347/_347/_347/_347/_347/_347": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_409/_409/_409/_409/_409/_409": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_88": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_373": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_253/_253/_253/_253/_253": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_78/_78/_78/_78": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_282/_282/_282/_282/_282/_282/_282/_282": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_294/_294/_294/_294/_294": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_52/_52/_52/_52/_52/_52/_52": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_398/_398/_398/_398/_398/_398": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_170/_170/_170/_170/_170/_170/_170": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_116": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_403/_403/_403/_403/_403": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_190/_190": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_222": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_327/_327/_327/_327/_327/_327/_327/_327/_327": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_154/_154/_154": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_410/_410/_410": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_422": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_415/_415/_415/_415/_415": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_358/_358/_358/_358/_358": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_43": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_492/_492": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_434/_434/_434/_434/_434": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_39/_39/_39/_39": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_122/_122/_122/_122/_122/_122/_122/_122": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_364/_364/_364/_364/_364/_364/_364/_364/_364": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_89/_89/_89": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_372/_372/_372/_372/_372": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_380/_380/_380/_380": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_23/_23/_23/_23": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_251/_251/_251/_251/_251/_251/_251/_251": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_193": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_186/_186/_186/_186/_186/_186": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_428/_428/_428/_428/_428/_428/_428/_428/_428": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_103/_103/_103/_103/_103/_103/_103": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_488/_488/_488/_488": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_17": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_454/_454/_454/_454/_454/_454/_454/_454": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_311/_311/_311/_311/_311/_311/_311/_311": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_42/_42/_42": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_249": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_284/_284/_284/_284": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_86/_86": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_477/_477/_477/_477": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_441/_441/_441": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_414/_414/_414/_414/_414/_414": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_27/_27/_27/_27/_27/_27": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_164/_164/_164/_164/_164/_164/_164/_164/_164": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_320/_320/_320/_320/_320/_320/_320/_320/_320": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_494/_494/_494/_494/_494": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_120/_120/_120/_120/_120/_120/_120": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_107/_107/_107/_107": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_211": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_100/_100/_100/_100/_100/_100": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_92/_92": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_252": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_495/_495/_495/_495": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_387/_387": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_281/_281/_281": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_318/_318/_318/_318/_318/_318/_318/_318/_318": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_83/_83/_83/_83/_83": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_25/_25/_25/_25/_25/_25": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_278/_278/_278": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_79/_79/_79/_79": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_201/_201/_201/_201/_201/_201/_201/_201": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_402/_402/_402/_402/_402/_402": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_119": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_299/_299/_299/_299/_299/_299/_299": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_3/_3": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_462/_462/_462/_462/_462/_462/_462/_462/_462": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_345/_345/_345/_345/_345": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_233/_233/_233/_233/_233/_233": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_82/_82": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_399/_399/_399/_399/_399/_399": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_9/_9/_9/_9": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_7/_7/_7/_7/_7/_7/_7/_7/_7": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_355/_355/_355/_355/_355/_355/_355/_355": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_34/_34/_34/_34/_34/_34/_34": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_334/_334/_334/_334/_334/_334/_334/_334/_334": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_236/_236/_236/_236/_236/_236/_236/_236": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_388/_388/_388/_388/_388/_388/_388/_388": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_168/_168/_168/_168/_168/_168/_168/_168/_168": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_307/_307/_307/_307/_307/_307/_307": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_407/_407": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_401/_401/_401/_401/_401/_401/_401/_401/_401": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_46/_46/_46/_46/_46": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_269/_269/_269/_269/_269/_269": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_147": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_369/_369": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_171/_171": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_353/_353/_353/_353": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_111/_111/_111/_111/_111/_111/_111": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_417/_417/_417": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_218": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_65/_65/_65": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_177/_177/_177/_177/_177/_177/_177/_177": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_232/_232/_232/_232/_232/_232/_232/_232/_232": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_181/_181/_181/_181/_181/_181": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_338/_338/_338/_338/_338/_338/_338": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_431/_431/_431": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_80/_80/_80/_80/_80/_80": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_31/_31/_31/_31/_31/_31/_31/_31": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_336/_336/_336/_336/_336/_336": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_292/_292/_292/_292/_292/_292/_292/_292": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_110/_110/_110/_110/_110/_110/_110/_110/_110": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_471/_471/_471": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_367/_367/_367/_367/_367/_367/_367/_367/_367": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_490/_490/_490/_490/_490/_490/_490/_490/_490": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_475/_475/_475/_475/_475/_475/_475/_475/_475": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_191/_191/_191": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_340/_340/_340/_340/_340/_340/_340": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_1/_1/_1/_1/_1/_1": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_262/_262/_262/_262/_262/_262/_262/_262": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_187/_187/_187": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_356/_356/_356/_356": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_323/_323/_323/_323": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_326/_326/_326/_326/_326": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_229/_229/_229": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_226/_226/_226/_226/_226/_226/_226/_226": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_90/_90/_90/_90/_90/_90/_90/_90": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_435/_435/_435/_435/_435/_435/_435/_435/_435": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_445/_445/_445/_445/_445/_445": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_95/_95/_95/_95": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_194/_194/_194/_194/_194": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_271": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_137/_137/_137/_137/_137/_137/_137": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_146/_146/_146/_146": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_158/_158/_158/_158/_158/_158/_158/_158": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_188/_188/_188/_188/_188/_188/_188": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_322/_322/_322/_322": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_283/_283/_283/_283/_283/_283/_283/_283": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_126/_126/_126/_126/_126/_126": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_348": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_385": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_315/_315/_315/_315/_315/_315/_315/_315/_315": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_241/_241/_241": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_485": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_32/_32/_32/_32/_32/_32": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_497": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_359/_359/_359/_359/_359/_359/_359/_359/_359": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_316/_316/_316": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_33/_33/_33": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_74/_74/_74/_74/_74/_74/_74/_74/_74": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_416/_416/_416/_416": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_277": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_295/_295/_295/_295": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_178/_178/_178/_178/_178/_178/_178": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_412/_412/_412": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_324/_324/_324/_324/_324/_324/_324/_324/_324": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_148": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_406": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_223/_223/_223/_223": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_11/_11": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_466/_466/_466/_466": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_63": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_35/_35/_35/_35/_35": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_248/_248/_248/_248": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_270/_270/_270/_270/_270/_270/_270": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_263/_263/_263/_263/_263/_263": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_459/_459": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_393/_393/_393/_393": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_426/_426/_426/_426/_426/_426/_426": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_64/_64/_64/_64/_64/_64": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_231/_231/_231/_231/_231/_231/_231": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_489/_489": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_305/_305/_305": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_371/_371/_371/_371/_371/_371/_371/_371/_371": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_344/_344/_344": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_40/_40/_40": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_478/_478/_478": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_349/_349/_349": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_491/_491/_491/_491/_491/_491": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_165/_165/_165/_165/_165/_165": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_6/_6": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_212/_212/_212/_212/_212/_212": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_85/_85/_85/_85/_85": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_128/_128/_128/_128": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_57/_57/_57/_57/_57/_57/_57/_57": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_159/_159": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_461/_461/_461/_461/_461": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_273/_273": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_377/_377": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_444/_444/_444/_444/_444/_444/_444": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_0/_0/_0": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_112/_112/_112": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_214/_214/_214/_214/_214/_214/_214/_214": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_54/_54/_54": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_192/_192/_192/_192/_192": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_10/_10/_10": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_224/_224/_224": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_460/_460/_460/_460/_460/_460/_460/_460": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_5/_5/_5": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_77/_77": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_481/_481/_481": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_195/_195/_195/_195/_195/_195/_195/_195": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_279": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_363/_363/_363/_363/_363/_363/_363": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_386/_386/_386/_386": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_234/_234/_234/_234/_234/_234": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_430/_430/_430/_430/_430/_430/_430/_430/_430": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_346/_346/_346/_346": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_290/_290/_290/_290": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_291/_291/_291/_291/_291/_291": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_288/_288/_288/_288": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_139/_139/_139/_139": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_448/_448/_448/_448": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_296/_296/_296/_296/_296/_296/_296/_296": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_375/_375/_375/_375/_375/_375/_375/_375": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_67/_67/_67/_67/_67/_67": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_91/_91": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_16/_16/_16/_16/_16/_16": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_69/_69/_69/_69/_69": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_157/_157/_157": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_19/_19/_19": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_114/_114/_114/_114/_114/_114/_114/_114/_114": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_235/_235/_235/_235/_235/_235/_235/_235/_235": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_162/_162/_162/_162/_162": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_209/_209/_209/_209/_209/_209/_209/_209": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_370/_370": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_180/_180": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_418/_418/_418/_418": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_331/_331/_331/_331/_331/_331/_331": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_132/_132/_132/_132/_132": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_419/_419/_419/_419/_419/_419": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_397/_397/_397/_397": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_94/_94/_94/_94/_94": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_274/_274/_274/_274/_274/_274/_274": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_115/_115": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_351/_351/_351/_351/_351/_351/_351/_351": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_238/_238/_238/_238": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_206/_206/_206/_206/_206/_206": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_357/_357/_357": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_468/_468": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_167/_167/_167/_167": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_217/_217/_217/_217/_217/_217/_217/_217": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_2/_2/_2/_2/_2": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_144/_144": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_213/_213/_213/_213/_213/_213/_213/_213/_213": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_482/_482/_482/_482/_482/_482": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_22/_22/_22/_22/_22/_22/_22/_22/_22": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_285/_285/_285": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_476/_476/_476/_476/_476/_476/_476": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_440": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_303/_303/_303/_303/_303/_303/_303/_303": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_61/_61": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_395/_395/_395/_395/_395/_395/_395/_395": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_56/_56/_56/_56/_56/_56/_56/_56": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_483/_483/_483/_483/_483/_483/_483/_483/_483": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_496/_496/_496/_496/_496": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_389/_389/_389/_389/_389/_389/_389/_389/_389": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_104/_104/_104": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_304/_304/_304/_304/_304/_304/_304/_304": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_29/_29/_29": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_443/_443/_443/_443": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_337/_337/_337/_337/_337/_337": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_267/_267/_267/_267/_267/_267/_267": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_208/_208/_208/_208/_208/_208/_208": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_189/_189/_189": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_239/_239": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_14": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_354/_354/_354/_354/_354/_354": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_250/_250/_250": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_258/_258/_258/_258/_258/_258/_258/_258": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_479/_479/_479/_479/_479/_479/_479/_479": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_221/_221/_221/_221": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_301/_301/_301/_301/_301/_301/_301": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_183/_183/_183": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_498/_498/_498/_498/_498/_498/_498/_498": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_12/_12/_12/_12/_12": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_286": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_265/_265/_265/_265/_265/_265": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_75": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_96/_96/_96/_96/_96/_96/_96": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_350/_350": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_391/_391/_391": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_51/_51/_51/_51/_51/_51/_51/_51": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_259/_259/_259/_259/_259/_259/_259/_259/_259": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_420/_420": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_117/_117/_117/_117/_117/_117": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_36": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_335": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_113/_113/_113/_113": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_439": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_376/_376/_376/_376/_376/_376/_376": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_261/_261": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_197/_197/_197/_197": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_202/_202/_202/_202": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_451/_451/_451/_451/_451/_451/_451/_451": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_140/_140/_140/_140/_140/_140": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_309/_309/_309/_309": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_392": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_400/_400/_400/_400/_400/_400": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_50/_50/_50/_50/_50/_50/_50/_50": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_436/_436/_436/_436": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_227/_227/_227/_227": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_328/_328/_328/_328": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_360/_360/_360/_360/_360/_360/_360/_360/_360": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_106/_106/_106/_106/_106/_106": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_247/_247/_247/_247/_247/_247": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_48/_48/_48": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_141/_141/_141/_141/_141/_141/_141": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_446/_446/_446/_446/_446/_446": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_365": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_240": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_493": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_105/_105/_105/_105/_105/_105/_105/_105/_105": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_396/_396/_396": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_242/_242/_242": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_447/_447/_447": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_76/_76/_76/_76": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_423/_423/_423/_423/_423": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_473/_473/_473": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_97/_97": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_230/_230/_230/_230": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_264/_264": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_456/_456/_456/_456/_456/_456": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_313/_313/_313/_313/_313/_313/_313": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_136": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_184/_184/_184/_184/_184/_184/_184/_184": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_163": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_228/_228/_228/_228/_228/_228/_228/_228/_228": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_275/_275": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_166/_166/_166": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_108": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_123/_123/_123/_123": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_339/_339/_339/_339/_339/_339/_339/_339/_339": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_411/_411/_411/_411/_411/_411/_411/_411/_411": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_53/_53": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_342/_342/_342/_342": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_204/_204": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_484/_484/_484/_484": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_266/_266/_266/_266/_266/_266": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_15/_15/_15/_15/_15/_15/_15": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_47/_47/_47/_47/_47/_47": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_38/_38/_38/_38/_38/_38/_38/_38/_38": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_467/_467/_467/_467": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_49/_49/_49/_49/_49/_49/_49/_49/_49": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_59/_59/_59": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_366": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_297/_297/_297/_297/_297/_297/_297": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_381/_381/_381": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_121/_121/_121/_121/_121/_121/_121/_121": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_289/_289/_289/_289/_289": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_174/_174": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_352/_352/_352/_352/_352": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_55/_55": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_24/_24/_24/_24/_24/_24/_24/_24/_24": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_332/_332/_332/_332": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_404/_404/_404/_404": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_293/_293/_293/_293/_293/_293": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_437/_437/_437/_437/_437/_437": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_429/_429/_429/_429/_429/_429/_429": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_432": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_151/_151/_151/_151/_151/_151": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_8/_8/_8/_8/_8/_8/_8/_8/_8": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_210/_210/_210/_210/_210/_210/_210": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_138/_138/_138/_138": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_99/_99/_99/_99": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_179/_179/_179/_179/_179/_179": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_58/_58/_58/_58": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_237/_237/_237/_237": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_255/_255/_255/_255/_255": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_244/_244/_244": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_125/_125/_125/_125/_125/_125/_125": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_66/_66/_66": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_499/_499/_499/_499/_499": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_182/_182/_182/_182": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_287/_287/_287/_287/_287": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_310/_310": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_41/_41": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_470/_470/_470/_470/_470/_470": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_203": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_382/_382/_382/_382/_382/_382/_382/_382/_382": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_452/_452/_452/_452/_452/_452/_452": OmitFunctions<{
  msg: "Hello, World!"
}>;
"mocks/_486/_486": OmitFunctions<{
  msg: "Hello, World!"
}>;
};

export type ApiGetResponseMap = {
[key: `x/${string}`]: OmitFunctions<string>;
"": OmitFunctions<string>;
"mocks/_433/_433/_433/_433/_433/_433/_433/_433/_433": OmitFunctions<string>;
"mocks/_156": OmitFunctions<string>;
"mocks/_254/_254/_254/_254": OmitFunctions<string>;
"mocks/_378/_378/_378/_378/_378/_378/_378/_378/_378": OmitFunctions<string>;
"mocks/_93/_93/_93/_93/_93/_93": OmitFunctions<string>;
"mocks/_84/_84/_84/_84/_84/_84/_84/_84/_84": OmitFunctions<string>;
"mocks/_102/_102/_102/_102/_102": OmitFunctions<string>;
"mocks/_361/_361/_361": OmitFunctions<string>;
"mocks/_101": OmitFunctions<string>;
"mocks/_175/_175/_175/_175/_175/_175/_175/_175": OmitFunctions<string>;
"mocks/_20/_20/_20/_20": OmitFunctions<string>;
"mocks/_215/_215/_215/_215/_215": OmitFunctions<string>;
"mocks/_220/_220/_220/_220/_220/_220/_220/_220/_220": OmitFunctions<string>;
"mocks/_405": OmitFunctions<string>;
"mocks/_199/_199/_199": OmitFunctions<string>;
"mocks/_442/_442/_442/_442/_442/_442/_442/_442/_442": OmitFunctions<string>;
"mocks/_198/_198/_198/_198/_198/_198": OmitFunctions<string>;
"mocks/_413/_413/_413/_413/_413/_413/_413": OmitFunctions<string>;
"mocks/_216/_216/_216/_216": OmitFunctions<string>;
"mocks/_298/_298/_298/_298/_298/_298/_298": OmitFunctions<string>;
"mocks/_185/_185/_185/_185/_185": OmitFunctions<string>;
"mocks/_160/_160/_160": OmitFunctions<string>;
"mocks/_362/_362/_362": OmitFunctions<string>;
"mocks/_457/_457/_457/_457/_457/_457/_457/_457": OmitFunctions<string>;
"mocks/_72/_72": OmitFunctions<string>;
"mocks/_463/_463/_463/_463": OmitFunctions<string>;
"mocks/_314/_314/_314/_314": OmitFunctions<string>;
"mocks/_449/_449/_449/_449/_449/_449/_449": OmitFunctions<string>;
"mocks/_169/_169": OmitFunctions<string>;
"mocks/_472/_472/_472/_472/_472/_472/_472": OmitFunctions<string>;
"mocks/_458/_458/_458/_458/_458/_458/_458": OmitFunctions<string>;
"mocks/_474/_474/_474/_474/_474/_474": OmitFunctions<string>;
"mocks/_465/_465/_465/_465/_465/_465/_465/_465/_465": OmitFunctions<string>;
"mocks/_272/_272/_272/_272/_272/_272/_272": OmitFunctions<string>;
"mocks/_150/_150/_150/_150/_150/_150/_150": OmitFunctions<string>;
"mocks/_450/_450/_450": OmitFunctions<string>;
"mocks/_487/_487/_487/_487": OmitFunctions<string>;
"mocks/_28/_28/_28/_28": OmitFunctions<string>;
"mocks/_133/_133/_133/_133/_133": OmitFunctions<string>;
"mocks/_143/_143/_143/_143": OmitFunctions<string>;
"mocks/_26/_26/_26/_26/_26/_26/_26": OmitFunctions<string>;
"mocks/_424/_424/_424/_424": OmitFunctions<string>;
"mocks/_455/_455": OmitFunctions<string>;
"mocks/_306/_306/_306": OmitFunctions<string>;
"mocks/_109/_109/_109/_109/_109": OmitFunctions<string>;
"mocks/_98/_98/_98/_98/_98/_98/_98/_98/_98": OmitFunctions<string>;
"mocks/_319/_319/_319/_319/_319/_319/_319/_319/_319": OmitFunctions<string>;
"mocks/_256/_256": OmitFunctions<string>;
"mocks/_219/_219/_219/_219/_219": OmitFunctions<string>;
"mocks/_152/_152/_152/_152/_152": OmitFunctions<string>;
"mocks/_205/_205/_205/_205/_205/_205/_205/_205": OmitFunctions<string>;
"mocks/_131/_131/_131/_131/_131/_131": OmitFunctions<string>;
"mocks/_374": OmitFunctions<string>;
"mocks/_200/_200/_200/_200": OmitFunctions<string>;
"mocks/_207/_207/_207/_207": OmitFunctions<string>;
"mocks/_18/_18/_18/_18/_18": OmitFunctions<string>;
"mocks/_243/_243/_243/_243/_243": OmitFunctions<string>;
"mocks/_312/_312/_312/_312": OmitFunctions<string>;
"mocks/_330/_330": OmitFunctions<string>;
"mocks/_421/_421/_421": OmitFunctions<string>;
"mocks/_153/_153/_153/_153/_153/_153/_153": OmitFunctions<string>;
"mocks/_341/_341": OmitFunctions<string>;
"mocks/_4/_4/_4/_4/_4/_4": OmitFunctions<string>;
"mocks/_480/_480/_480/_480/_480": OmitFunctions<string>;
"mocks/_453": OmitFunctions<string>;
"mocks/_268/_268/_268/_268/_268/_268/_268": OmitFunctions<string>;
"mocks/_142/_142/_142/_142/_142/_142/_142/_142": OmitFunctions<string>;
"mocks/_427/_427/_427/_427/_427/_427/_427/_427": OmitFunctions<string>;
"mocks/_245/_245/_245/_245/_245": OmitFunctions<string>;
"mocks/_127/_127/_127/_127/_127/_127/_127/_127/_127": OmitFunctions<string>;
"mocks/_300": OmitFunctions<string>;
"mocks/_280": OmitFunctions<string>;
"mocks/_60/_60/_60/_60": OmitFunctions<string>;
"mocks/_13": OmitFunctions<string>;
"mocks/_390/_390/_390/_390/_390/_390/_390/_390": OmitFunctions<string>;
"mocks/_135/_135": OmitFunctions<string>;
"mocks/_408/_408/_408/_408/_408/_408/_408/_408": OmitFunctions<string>;
"mocks/_173/_173/_173": OmitFunctions<string>;
"mocks/_425/_425/_425/_425/_425/_425/_425": OmitFunctions<string>;
"mocks/_196/_196/_196/_196": OmitFunctions<string>;
"mocks/_347/_347/_347/_347/_347/_347": OmitFunctions<string>;
"mocks/_409/_409/_409/_409/_409/_409": OmitFunctions<string>;
"mocks/_88": OmitFunctions<string>;
"mocks/_373": OmitFunctions<string>;
"mocks/_253/_253/_253/_253/_253": OmitFunctions<string>;
"mocks/_78/_78/_78/_78": OmitFunctions<string>;
"mocks/_282/_282/_282/_282/_282/_282/_282/_282": OmitFunctions<string>;
"mocks/_294/_294/_294/_294/_294": OmitFunctions<string>;
"mocks/_52/_52/_52/_52/_52/_52/_52": OmitFunctions<string>;
"mocks/_398/_398/_398/_398/_398/_398": OmitFunctions<string>;
"mocks/_170/_170/_170/_170/_170/_170/_170": OmitFunctions<string>;
"mocks/_116": OmitFunctions<string>;
"mocks/_403/_403/_403/_403/_403": OmitFunctions<string>;
"mocks/_190/_190": OmitFunctions<string>;
"mocks/_222": OmitFunctions<string>;
"mocks/_327/_327/_327/_327/_327/_327/_327/_327/_327": OmitFunctions<string>;
"mocks/_154/_154/_154": OmitFunctions<string>;
"mocks/_410/_410/_410": OmitFunctions<string>;
"mocks/_422": OmitFunctions<string>;
"mocks/_415/_415/_415/_415/_415": OmitFunctions<string>;
"mocks/_358/_358/_358/_358/_358": OmitFunctions<string>;
"mocks/_43": OmitFunctions<string>;
"mocks/_492/_492": OmitFunctions<string>;
"mocks/_434/_434/_434/_434/_434": OmitFunctions<string>;
"mocks/_39/_39/_39/_39": OmitFunctions<string>;
"mocks/_122/_122/_122/_122/_122/_122/_122/_122": OmitFunctions<string>;
"mocks/_364/_364/_364/_364/_364/_364/_364/_364/_364": OmitFunctions<string>;
"mocks/_89/_89/_89": OmitFunctions<string>;
"mocks/_372/_372/_372/_372/_372": OmitFunctions<string>;
"mocks/_380/_380/_380/_380": OmitFunctions<string>;
"mocks/_23/_23/_23/_23": OmitFunctions<string>;
"mocks/_251/_251/_251/_251/_251/_251/_251/_251": OmitFunctions<string>;
"mocks/_193": OmitFunctions<string>;
"mocks/_186/_186/_186/_186/_186/_186": OmitFunctions<string>;
"mocks/_428/_428/_428/_428/_428/_428/_428/_428/_428": OmitFunctions<string>;
"mocks/_103/_103/_103/_103/_103/_103/_103": OmitFunctions<string>;
"mocks/_488/_488/_488/_488": OmitFunctions<string>;
"mocks/_17": OmitFunctions<string>;
"mocks/_454/_454/_454/_454/_454/_454/_454/_454": OmitFunctions<string>;
"mocks/_311/_311/_311/_311/_311/_311/_311/_311": OmitFunctions<string>;
"mocks/_42/_42/_42": OmitFunctions<string>;
"mocks/_249": OmitFunctions<string>;
"mocks/_284/_284/_284/_284": OmitFunctions<string>;
"mocks/_86/_86": OmitFunctions<string>;
"mocks/_477/_477/_477/_477": OmitFunctions<string>;
"mocks/_441/_441/_441": OmitFunctions<string>;
"mocks/_414/_414/_414/_414/_414/_414": OmitFunctions<string>;
"mocks/_27/_27/_27/_27/_27/_27": OmitFunctions<string>;
"mocks/_164/_164/_164/_164/_164/_164/_164/_164/_164": OmitFunctions<string>;
"mocks/_320/_320/_320/_320/_320/_320/_320/_320/_320": OmitFunctions<string>;
"mocks/_494/_494/_494/_494/_494": OmitFunctions<string>;
"mocks/_120/_120/_120/_120/_120/_120/_120": OmitFunctions<string>;
"mocks/_107/_107/_107/_107": OmitFunctions<string>;
"mocks/_211": OmitFunctions<string>;
"mocks/_100/_100/_100/_100/_100/_100": OmitFunctions<string>;
"mocks/_92/_92": OmitFunctions<string>;
"mocks/_252": OmitFunctions<string>;
"mocks/_495/_495/_495/_495": OmitFunctions<string>;
"mocks/_387/_387": OmitFunctions<string>;
"mocks/_281/_281/_281": OmitFunctions<string>;
"mocks/_318/_318/_318/_318/_318/_318/_318/_318/_318": OmitFunctions<string>;
"mocks/_83/_83/_83/_83/_83": OmitFunctions<string>;
"mocks/_25/_25/_25/_25/_25/_25": OmitFunctions<string>;
"mocks/_278/_278/_278": OmitFunctions<string>;
"mocks/_79/_79/_79/_79": OmitFunctions<string>;
"mocks/_201/_201/_201/_201/_201/_201/_201/_201": OmitFunctions<string>;
"mocks/_402/_402/_402/_402/_402/_402": OmitFunctions<string>;
"mocks/_119": OmitFunctions<string>;
"mocks/_299/_299/_299/_299/_299/_299/_299": OmitFunctions<string>;
"mocks/_3/_3": OmitFunctions<string>;
"mocks/_462/_462/_462/_462/_462/_462/_462/_462/_462": OmitFunctions<string>;
"mocks/_345/_345/_345/_345/_345": OmitFunctions<string>;
"mocks/_233/_233/_233/_233/_233/_233": OmitFunctions<string>;
"mocks/_82/_82": OmitFunctions<string>;
"mocks/_399/_399/_399/_399/_399/_399": OmitFunctions<string>;
"mocks/_9/_9/_9/_9": OmitFunctions<string>;
"mocks/_7/_7/_7/_7/_7/_7/_7/_7/_7": OmitFunctions<string>;
"mocks/_355/_355/_355/_355/_355/_355/_355/_355": OmitFunctions<string>;
"mocks/_34/_34/_34/_34/_34/_34/_34": OmitFunctions<string>;
"mocks/_334/_334/_334/_334/_334/_334/_334/_334/_334": OmitFunctions<string>;
"mocks/_236/_236/_236/_236/_236/_236/_236/_236": OmitFunctions<string>;
"mocks": OmitFunctions<string>;
"mocks/_388/_388/_388/_388/_388/_388/_388/_388": OmitFunctions<string>;
"mocks/_168/_168/_168/_168/_168/_168/_168/_168/_168": OmitFunctions<string>;
"mocks/_307/_307/_307/_307/_307/_307/_307": OmitFunctions<string>;
"mocks/_407/_407": OmitFunctions<string>;
"mocks/_401/_401/_401/_401/_401/_401/_401/_401/_401": OmitFunctions<string>;
"mocks/_46/_46/_46/_46/_46": OmitFunctions<string>;
"mocks/_269/_269/_269/_269/_269/_269": OmitFunctions<string>;
"mocks/_147": OmitFunctions<string>;
"mocks/_369/_369": OmitFunctions<string>;
"mocks/_171/_171": OmitFunctions<string>;
"mocks/_353/_353/_353/_353": OmitFunctions<string>;
"mocks/_111/_111/_111/_111/_111/_111/_111": OmitFunctions<string>;
"mocks/_417/_417/_417": OmitFunctions<string>;
"mocks/_218": OmitFunctions<string>;
"mocks/_65/_65/_65": OmitFunctions<string>;
"mocks/_177/_177/_177/_177/_177/_177/_177/_177": OmitFunctions<string>;
"mocks/_232/_232/_232/_232/_232/_232/_232/_232/_232": OmitFunctions<string>;
"mocks/_181/_181/_181/_181/_181/_181": OmitFunctions<string>;
"mocks/_338/_338/_338/_338/_338/_338/_338": OmitFunctions<string>;
"mocks/_431/_431/_431": OmitFunctions<string>;
"mocks/_80/_80/_80/_80/_80/_80": OmitFunctions<string>;
"mocks/_31/_31/_31/_31/_31/_31/_31/_31": OmitFunctions<string>;
"mocks/_336/_336/_336/_336/_336/_336": OmitFunctions<string>;
"mocks/_292/_292/_292/_292/_292/_292/_292/_292": OmitFunctions<string>;
"mocks/_110/_110/_110/_110/_110/_110/_110/_110/_110": OmitFunctions<string>;
"mocks/_471/_471/_471": OmitFunctions<string>;
"mocks/_367/_367/_367/_367/_367/_367/_367/_367/_367": OmitFunctions<string>;
"mocks/_490/_490/_490/_490/_490/_490/_490/_490/_490": OmitFunctions<string>;
"mocks/_475/_475/_475/_475/_475/_475/_475/_475/_475": OmitFunctions<string>;
"mocks/_191/_191/_191": OmitFunctions<string>;
"mocks/_340/_340/_340/_340/_340/_340/_340": OmitFunctions<string>;
"mocks/_1/_1/_1/_1/_1/_1": OmitFunctions<string>;
"mocks/_262/_262/_262/_262/_262/_262/_262/_262": OmitFunctions<string>;
"mocks/_187/_187/_187": OmitFunctions<string>;
"mocks/_356/_356/_356/_356": OmitFunctions<string>;
"mocks/_323/_323/_323/_323": OmitFunctions<string>;
"mocks/_326/_326/_326/_326/_326": OmitFunctions<string>;
"mocks/_229/_229/_229": OmitFunctions<string>;
"mocks/_226/_226/_226/_226/_226/_226/_226/_226": OmitFunctions<string>;
"mocks/_90/_90/_90/_90/_90/_90/_90/_90": OmitFunctions<string>;
"mocks/_435/_435/_435/_435/_435/_435/_435/_435/_435": OmitFunctions<string>;
"mocks/_445/_445/_445/_445/_445/_445": OmitFunctions<string>;
"mocks/_95/_95/_95/_95": OmitFunctions<string>;
"mocks/_194/_194/_194/_194/_194": OmitFunctions<string>;
"mocks/_271": OmitFunctions<string>;
"mocks/_137/_137/_137/_137/_137/_137/_137": OmitFunctions<string>;
"mocks/_146/_146/_146/_146": OmitFunctions<string>;
"mocks/_158/_158/_158/_158/_158/_158/_158/_158": OmitFunctions<string>;
"mocks/_188/_188/_188/_188/_188/_188/_188": OmitFunctions<string>;
"mocks/_322/_322/_322/_322": OmitFunctions<string>;
"mocks/_283/_283/_283/_283/_283/_283/_283/_283": OmitFunctions<string>;
"mocks/_126/_126/_126/_126/_126/_126": OmitFunctions<string>;
"mocks/_348": OmitFunctions<string>;
"mocks/_385": OmitFunctions<string>;
"mocks/_315/_315/_315/_315/_315/_315/_315/_315/_315": OmitFunctions<string>;
"mocks/_241/_241/_241": OmitFunctions<string>;
"mocks/_485": OmitFunctions<string>;
"mocks/_32/_32/_32/_32/_32/_32": OmitFunctions<string>;
"mocks/_497": OmitFunctions<string>;
"mocks/_359/_359/_359/_359/_359/_359/_359/_359/_359": OmitFunctions<string>;
"mocks/_316/_316/_316": OmitFunctions<string>;
"mocks/_33/_33/_33": OmitFunctions<string>;
"mocks/_74/_74/_74/_74/_74/_74/_74/_74/_74": OmitFunctions<string>;
"mocks/_416/_416/_416/_416": OmitFunctions<string>;
"mocks/_277": OmitFunctions<string>;
"mocks/_295/_295/_295/_295": OmitFunctions<string>;
"mocks/_178/_178/_178/_178/_178/_178/_178": OmitFunctions<string>;
"mocks/_412/_412/_412": OmitFunctions<string>;
"mocks/_324/_324/_324/_324/_324/_324/_324/_324/_324": OmitFunctions<string>;
"mocks/_148": OmitFunctions<string>;
"mocks/_406": OmitFunctions<string>;
"mocks/_223/_223/_223/_223": OmitFunctions<string>;
"mocks/_11/_11": OmitFunctions<string>;
"mocks/_466/_466/_466/_466": OmitFunctions<string>;
"mocks/_63": OmitFunctions<string>;
"mocks/_35/_35/_35/_35/_35": OmitFunctions<string>;
"mocks/_248/_248/_248/_248": OmitFunctions<string>;
"mocks/_270/_270/_270/_270/_270/_270/_270": OmitFunctions<string>;
"mocks/_263/_263/_263/_263/_263/_263": OmitFunctions<string>;
"mocks/_459/_459": OmitFunctions<string>;
"mocks/_393/_393/_393/_393": OmitFunctions<string>;
"mocks/_426/_426/_426/_426/_426/_426/_426": OmitFunctions<string>;
"mocks/_64/_64/_64/_64/_64/_64": OmitFunctions<string>;
"mocks/_231/_231/_231/_231/_231/_231/_231": OmitFunctions<string>;
"mocks/_489/_489": OmitFunctions<string>;
"mocks/_305/_305/_305": OmitFunctions<string>;
"mocks/_371/_371/_371/_371/_371/_371/_371/_371/_371": OmitFunctions<string>;
"mocks/_344/_344/_344": OmitFunctions<string>;
"mocks/_40/_40/_40": OmitFunctions<string>;
"mocks/_478/_478/_478": OmitFunctions<string>;
"mocks/_349/_349/_349": OmitFunctions<string>;
"mocks/_491/_491/_491/_491/_491/_491": OmitFunctions<string>;
"mocks/_165/_165/_165/_165/_165/_165": OmitFunctions<string>;
"mocks/_6/_6": OmitFunctions<string>;
"mocks/_212/_212/_212/_212/_212/_212": OmitFunctions<string>;
"mocks/_85/_85/_85/_85/_85": OmitFunctions<string>;
"mocks/_128/_128/_128/_128": OmitFunctions<string>;
"mocks/_57/_57/_57/_57/_57/_57/_57/_57": OmitFunctions<string>;
"mocks/_159/_159": OmitFunctions<string>;
"mocks/_461/_461/_461/_461/_461": OmitFunctions<string>;
"mocks/_273/_273": OmitFunctions<string>;
"mocks/_377/_377": OmitFunctions<string>;
"mocks/_444/_444/_444/_444/_444/_444/_444": OmitFunctions<string>;
"mocks/_0/_0/_0": OmitFunctions<string>;
"mocks/_112/_112/_112": OmitFunctions<string>;
"mocks/_214/_214/_214/_214/_214/_214/_214/_214": OmitFunctions<string>;
"mocks/_54/_54/_54": OmitFunctions<string>;
"mocks/_192/_192/_192/_192/_192": OmitFunctions<string>;
"mocks/_10/_10/_10": OmitFunctions<string>;
"mocks/_224/_224/_224": OmitFunctions<string>;
"mocks/_460/_460/_460/_460/_460/_460/_460/_460": OmitFunctions<string>;
"mocks/_5/_5/_5": OmitFunctions<string>;
"mocks/_77/_77": OmitFunctions<string>;
"mocks/_481/_481/_481": OmitFunctions<string>;
"mocks/_195/_195/_195/_195/_195/_195/_195/_195": OmitFunctions<string>;
"mocks/_279": OmitFunctions<string>;
"mocks/_363/_363/_363/_363/_363/_363/_363": OmitFunctions<string>;
"mocks/_386/_386/_386/_386": OmitFunctions<string>;
"mocks/_234/_234/_234/_234/_234/_234": OmitFunctions<string>;
"mocks/_430/_430/_430/_430/_430/_430/_430/_430/_430": OmitFunctions<string>;
"mocks/_346/_346/_346/_346": OmitFunctions<string>;
"mocks/_290/_290/_290/_290": OmitFunctions<string>;
"mocks/_291/_291/_291/_291/_291/_291": OmitFunctions<string>;
"mocks/_288/_288/_288/_288": OmitFunctions<string>;
"mocks/_139/_139/_139/_139": OmitFunctions<string>;
"mocks/_448/_448/_448/_448": OmitFunctions<string>;
"mocks/_296/_296/_296/_296/_296/_296/_296/_296": OmitFunctions<string>;
"mocks/_375/_375/_375/_375/_375/_375/_375/_375": OmitFunctions<string>;
"mocks/_67/_67/_67/_67/_67/_67": OmitFunctions<string>;
"mocks/_91/_91": OmitFunctions<string>;
"mocks/_16/_16/_16/_16/_16/_16": OmitFunctions<string>;
"mocks/_69/_69/_69/_69/_69": OmitFunctions<string>;
"mocks/_157/_157/_157": OmitFunctions<string>;
"mocks/_19/_19/_19": OmitFunctions<string>;
"mocks/_114/_114/_114/_114/_114/_114/_114/_114/_114": OmitFunctions<string>;
"mocks/_235/_235/_235/_235/_235/_235/_235/_235/_235": OmitFunctions<string>;
"mocks/_162/_162/_162/_162/_162": OmitFunctions<string>;
"mocks/_209/_209/_209/_209/_209/_209/_209/_209": OmitFunctions<string>;
"mocks/_370/_370": OmitFunctions<string>;
"mocks/_180/_180": OmitFunctions<string>;
"mocks/_418/_418/_418/_418": OmitFunctions<string>;
"mocks/_331/_331/_331/_331/_331/_331/_331": OmitFunctions<string>;
"mocks/_132/_132/_132/_132/_132": OmitFunctions<string>;
"mocks/_419/_419/_419/_419/_419/_419": OmitFunctions<string>;
"mocks/_397/_397/_397/_397": OmitFunctions<string>;
"mocks/_94/_94/_94/_94/_94": OmitFunctions<string>;
"mocks/_274/_274/_274/_274/_274/_274/_274": OmitFunctions<string>;
"mocks/_115/_115": OmitFunctions<string>;
"mocks/_351/_351/_351/_351/_351/_351/_351/_351": OmitFunctions<string>;
"mocks/_238/_238/_238/_238": OmitFunctions<string>;
"mocks/_206/_206/_206/_206/_206/_206": OmitFunctions<string>;
"mocks/_357/_357/_357": OmitFunctions<string>;
"mocks/_468/_468": OmitFunctions<string>;
"mocks/_167/_167/_167/_167": OmitFunctions<string>;
"mocks/_217/_217/_217/_217/_217/_217/_217/_217": OmitFunctions<string>;
"mocks/_2/_2/_2/_2/_2": OmitFunctions<string>;
"mocks/_144/_144": OmitFunctions<string>;
"mocks/_213/_213/_213/_213/_213/_213/_213/_213/_213": OmitFunctions<string>;
"mocks/_482/_482/_482/_482/_482/_482": OmitFunctions<string>;
"mocks/_22/_22/_22/_22/_22/_22/_22/_22/_22": OmitFunctions<string>;
"mocks/_285/_285/_285": OmitFunctions<string>;
"mocks/_476/_476/_476/_476/_476/_476/_476": OmitFunctions<string>;
"mocks/_440": OmitFunctions<string>;
"mocks/_303/_303/_303/_303/_303/_303/_303/_303": OmitFunctions<string>;
"mocks/_61/_61": OmitFunctions<string>;
"mocks/_395/_395/_395/_395/_395/_395/_395/_395": OmitFunctions<string>;
"mocks/_56/_56/_56/_56/_56/_56/_56/_56": OmitFunctions<string>;
"mocks/_483/_483/_483/_483/_483/_483/_483/_483/_483": OmitFunctions<string>;
"mocks/_496/_496/_496/_496/_496": OmitFunctions<string>;
"mocks/_389/_389/_389/_389/_389/_389/_389/_389/_389": OmitFunctions<string>;
"mocks/_104/_104/_104": OmitFunctions<string>;
"mocks/_304/_304/_304/_304/_304/_304/_304/_304": OmitFunctions<string>;
"mocks/_29/_29/_29": OmitFunctions<string>;
"mocks/_443/_443/_443/_443": OmitFunctions<string>;
"mocks/_337/_337/_337/_337/_337/_337": OmitFunctions<string>;
"mocks/_267/_267/_267/_267/_267/_267/_267": OmitFunctions<string>;
"mocks/_208/_208/_208/_208/_208/_208/_208": OmitFunctions<string>;
"mocks/_189/_189/_189": OmitFunctions<string>;
"mocks/_239/_239": OmitFunctions<string>;
"mocks/_14": OmitFunctions<string>;
"mocks/_354/_354/_354/_354/_354/_354": OmitFunctions<string>;
"mocks/_250/_250/_250": OmitFunctions<string>;
"mocks/_258/_258/_258/_258/_258/_258/_258/_258": OmitFunctions<string>;
"mocks/_479/_479/_479/_479/_479/_479/_479/_479": OmitFunctions<string>;
"mocks/_221/_221/_221/_221": OmitFunctions<string>;
"mocks/_301/_301/_301/_301/_301/_301/_301": OmitFunctions<string>;
"mocks/_183/_183/_183": OmitFunctions<string>;
"mocks/_498/_498/_498/_498/_498/_498/_498/_498": OmitFunctions<string>;
"mocks/_12/_12/_12/_12/_12": OmitFunctions<string>;
"mocks/_286": OmitFunctions<string>;
"mocks/_265/_265/_265/_265/_265/_265": OmitFunctions<string>;
"mocks/_75": OmitFunctions<string>;
"mocks/_96/_96/_96/_96/_96/_96/_96": OmitFunctions<string>;
"mocks/_350/_350": OmitFunctions<string>;
"mocks/_391/_391/_391": OmitFunctions<string>;
"mocks/_51/_51/_51/_51/_51/_51/_51/_51": OmitFunctions<string>;
"mocks/_259/_259/_259/_259/_259/_259/_259/_259/_259": OmitFunctions<string>;
"mocks/_420/_420": OmitFunctions<string>;
"mocks/_117/_117/_117/_117/_117/_117": OmitFunctions<string>;
"mocks/_36": OmitFunctions<string>;
"mocks/_335": OmitFunctions<string>;
"mocks/_113/_113/_113/_113": OmitFunctions<string>;
"mocks/_439": OmitFunctions<string>;
"mocks/_376/_376/_376/_376/_376/_376/_376": OmitFunctions<string>;
"mocks/_261/_261": OmitFunctions<string>;
"mocks/_197/_197/_197/_197": OmitFunctions<string>;
"mocks/_202/_202/_202/_202": OmitFunctions<string>;
"mocks/_451/_451/_451/_451/_451/_451/_451/_451": OmitFunctions<string>;
"mocks/_140/_140/_140/_140/_140/_140": OmitFunctions<string>;
"mocks/_309/_309/_309/_309": OmitFunctions<string>;
"mocks/_392": OmitFunctions<string>;
"mocks/_400/_400/_400/_400/_400/_400": OmitFunctions<string>;
"mocks/_50/_50/_50/_50/_50/_50/_50/_50": OmitFunctions<string>;
"mocks/_436/_436/_436/_436": OmitFunctions<string>;
"mocks/_227/_227/_227/_227": OmitFunctions<string>;
"mocks/_328/_328/_328/_328": OmitFunctions<string>;
"mocks/_360/_360/_360/_360/_360/_360/_360/_360/_360": OmitFunctions<string>;
"mocks/_106/_106/_106/_106/_106/_106": OmitFunctions<string>;
"mocks/_247/_247/_247/_247/_247/_247": OmitFunctions<string>;
"mocks/_48/_48/_48": OmitFunctions<string>;
"mocks/_141/_141/_141/_141/_141/_141/_141": OmitFunctions<string>;
"mocks/_446/_446/_446/_446/_446/_446": OmitFunctions<string>;
"mocks/_365": OmitFunctions<string>;
"mocks/_240": OmitFunctions<string>;
"mocks/_493": OmitFunctions<string>;
"mocks/_105/_105/_105/_105/_105/_105/_105/_105/_105": OmitFunctions<string>;
"mocks/_396/_396/_396": OmitFunctions<string>;
"mocks/_242/_242/_242": OmitFunctions<string>;
"mocks/_447/_447/_447": OmitFunctions<string>;
"mocks/_76/_76/_76/_76": OmitFunctions<string>;
"mocks/_423/_423/_423/_423/_423": OmitFunctions<string>;
"mocks/_473/_473/_473": OmitFunctions<string>;
"mocks/_97/_97": OmitFunctions<string>;
"mocks/_230/_230/_230/_230": OmitFunctions<string>;
"mocks/_264/_264": OmitFunctions<string>;
"mocks/_456/_456/_456/_456/_456/_456": OmitFunctions<string>;
"mocks/_313/_313/_313/_313/_313/_313/_313": OmitFunctions<string>;
"mocks/_136": OmitFunctions<string>;
"mocks/_184/_184/_184/_184/_184/_184/_184/_184": OmitFunctions<string>;
"mocks/_163": OmitFunctions<string>;
"mocks/_228/_228/_228/_228/_228/_228/_228/_228/_228": OmitFunctions<string>;
"mocks/_275/_275": OmitFunctions<string>;
"mocks/_166/_166/_166": OmitFunctions<string>;
"mocks/_108": OmitFunctions<string>;
"mocks/_123/_123/_123/_123": OmitFunctions<string>;
"mocks/_339/_339/_339/_339/_339/_339/_339/_339/_339": OmitFunctions<string>;
"mocks/_411/_411/_411/_411/_411/_411/_411/_411/_411": OmitFunctions<string>;
"mocks/_53/_53": OmitFunctions<string>;
"mocks/_342/_342/_342/_342": OmitFunctions<string>;
"mocks/_204/_204": OmitFunctions<string>;
"mocks/_484/_484/_484/_484": OmitFunctions<string>;
"mocks/_266/_266/_266/_266/_266/_266": OmitFunctions<string>;
"mocks/_15/_15/_15/_15/_15/_15/_15": OmitFunctions<string>;
"mocks/_47/_47/_47/_47/_47/_47": OmitFunctions<string>;
"mocks/_38/_38/_38/_38/_38/_38/_38/_38/_38": OmitFunctions<string>;
"mocks/_467/_467/_467/_467": OmitFunctions<string>;
"mocks/_49/_49/_49/_49/_49/_49/_49/_49/_49": OmitFunctions<string>;
"mocks/_59/_59/_59": OmitFunctions<string>;
"mocks/_366": OmitFunctions<string>;
"mocks/_297/_297/_297/_297/_297/_297/_297": OmitFunctions<string>;
"mocks/_381/_381/_381": OmitFunctions<string>;
"mocks/_121/_121/_121/_121/_121/_121/_121/_121": OmitFunctions<string>;
"mocks/_289/_289/_289/_289/_289": OmitFunctions<string>;
"mocks/_174/_174": OmitFunctions<string>;
"mocks/_352/_352/_352/_352/_352": OmitFunctions<string>;
"mocks/_55/_55": OmitFunctions<string>;
"mocks/_24/_24/_24/_24/_24/_24/_24/_24/_24": OmitFunctions<string>;
"mocks/_332/_332/_332/_332": OmitFunctions<string>;
"mocks/_404/_404/_404/_404": OmitFunctions<string>;
"mocks/_293/_293/_293/_293/_293/_293": OmitFunctions<string>;
"mocks/_437/_437/_437/_437/_437/_437": OmitFunctions<string>;
"mocks/_429/_429/_429/_429/_429/_429/_429": OmitFunctions<string>;
"mocks/_432": OmitFunctions<string>;
"mocks/_151/_151/_151/_151/_151/_151": OmitFunctions<string>;
"mocks/_8/_8/_8/_8/_8/_8/_8/_8/_8": OmitFunctions<string>;
"mocks/_210/_210/_210/_210/_210/_210/_210": OmitFunctions<string>;
"mocks/_138/_138/_138/_138": OmitFunctions<string>;
"mocks/_99/_99/_99/_99": OmitFunctions<string>;
"mocks/_179/_179/_179/_179/_179/_179": OmitFunctions<string>;
"mocks/_58/_58/_58/_58": OmitFunctions<string>;
"mocks/_237/_237/_237/_237": OmitFunctions<string>;
"mocks/_255/_255/_255/_255/_255": OmitFunctions<string>;
"mocks/_244/_244/_244": OmitFunctions<string>;
"mocks/_125/_125/_125/_125/_125/_125/_125": OmitFunctions<string>;
"mocks/_66/_66/_66": OmitFunctions<string>;
"mocks/_499/_499/_499/_499/_499": OmitFunctions<string>;
"mocks/_182/_182/_182/_182": OmitFunctions<string>;
"mocks/_287/_287/_287/_287/_287": OmitFunctions<string>;
"mocks/_310/_310": OmitFunctions<string>;
"mocks/_41/_41": OmitFunctions<string>;
"mocks/_470/_470/_470/_470/_470/_470": OmitFunctions<string>;
"mocks/_203": OmitFunctions<string>;
"mocks/_382/_382/_382/_382/_382/_382/_382/_382/_382": OmitFunctions<string>;
"mocks/_452/_452/_452/_452/_452/_452/_452": OmitFunctions<string>;
"mocks/_486/_486": OmitFunctions<string>;
};

export type ApiGetHeadersMap = {
[key: `x/${string}`]: OmitFunctions<{
  Authorization?: undefined | string
}> & {
    [key: string]: string; 
};
"": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_433/_433/_433/_433/_433/_433/_433/_433/_433": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_156": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_254/_254/_254/_254": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_378/_378/_378/_378/_378/_378/_378/_378/_378": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_93/_93/_93/_93/_93/_93": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_84/_84/_84/_84/_84/_84/_84/_84/_84": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_102/_102/_102/_102/_102": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_361/_361/_361": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_101": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_175/_175/_175/_175/_175/_175/_175/_175": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_20/_20/_20/_20": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_215/_215/_215/_215/_215": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_220/_220/_220/_220/_220/_220/_220/_220/_220": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_405": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_199/_199/_199": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_442/_442/_442/_442/_442/_442/_442/_442/_442": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_198/_198/_198/_198/_198/_198": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_413/_413/_413/_413/_413/_413/_413": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_216/_216/_216/_216": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_298/_298/_298/_298/_298/_298/_298": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_185/_185/_185/_185/_185": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_160/_160/_160": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_362/_362/_362": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_457/_457/_457/_457/_457/_457/_457/_457": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_72/_72": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_463/_463/_463/_463": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_314/_314/_314/_314": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_449/_449/_449/_449/_449/_449/_449": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_169/_169": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_472/_472/_472/_472/_472/_472/_472": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_458/_458/_458/_458/_458/_458/_458": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_474/_474/_474/_474/_474/_474": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_465/_465/_465/_465/_465/_465/_465/_465/_465": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_272/_272/_272/_272/_272/_272/_272": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_150/_150/_150/_150/_150/_150/_150": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_450/_450/_450": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_487/_487/_487/_487": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_28/_28/_28/_28": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_133/_133/_133/_133/_133": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_143/_143/_143/_143": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_26/_26/_26/_26/_26/_26/_26": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_424/_424/_424/_424": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_455/_455": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_306/_306/_306": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_109/_109/_109/_109/_109": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_98/_98/_98/_98/_98/_98/_98/_98/_98": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_319/_319/_319/_319/_319/_319/_319/_319/_319": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_256/_256": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_219/_219/_219/_219/_219": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_152/_152/_152/_152/_152": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_205/_205/_205/_205/_205/_205/_205/_205": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_131/_131/_131/_131/_131/_131": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_374": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_200/_200/_200/_200": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_207/_207/_207/_207": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_18/_18/_18/_18/_18": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_243/_243/_243/_243/_243": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_312/_312/_312/_312": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_330/_330": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_421/_421/_421": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_153/_153/_153/_153/_153/_153/_153": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_341/_341": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_4/_4/_4/_4/_4/_4": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_480/_480/_480/_480/_480": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_453": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_268/_268/_268/_268/_268/_268/_268": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_142/_142/_142/_142/_142/_142/_142/_142": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_427/_427/_427/_427/_427/_427/_427/_427": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_245/_245/_245/_245/_245": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_127/_127/_127/_127/_127/_127/_127/_127/_127": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_300": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_280": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_60/_60/_60/_60": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_13": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_390/_390/_390/_390/_390/_390/_390/_390": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_135/_135": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_408/_408/_408/_408/_408/_408/_408/_408": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_173/_173/_173": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_425/_425/_425/_425/_425/_425/_425": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_196/_196/_196/_196": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_347/_347/_347/_347/_347/_347": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_409/_409/_409/_409/_409/_409": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_88": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_373": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_253/_253/_253/_253/_253": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_78/_78/_78/_78": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_282/_282/_282/_282/_282/_282/_282/_282": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_294/_294/_294/_294/_294": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_52/_52/_52/_52/_52/_52/_52": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_398/_398/_398/_398/_398/_398": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_170/_170/_170/_170/_170/_170/_170": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_116": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_403/_403/_403/_403/_403": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_190/_190": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_222": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_327/_327/_327/_327/_327/_327/_327/_327/_327": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_154/_154/_154": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_410/_410/_410": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_422": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_415/_415/_415/_415/_415": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_358/_358/_358/_358/_358": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_43": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_492/_492": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_434/_434/_434/_434/_434": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_39/_39/_39/_39": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_122/_122/_122/_122/_122/_122/_122/_122": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_364/_364/_364/_364/_364/_364/_364/_364/_364": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_89/_89/_89": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_372/_372/_372/_372/_372": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_380/_380/_380/_380": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_23/_23/_23/_23": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_251/_251/_251/_251/_251/_251/_251/_251": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_193": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_186/_186/_186/_186/_186/_186": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_428/_428/_428/_428/_428/_428/_428/_428/_428": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_103/_103/_103/_103/_103/_103/_103": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_488/_488/_488/_488": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_17": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_454/_454/_454/_454/_454/_454/_454/_454": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_311/_311/_311/_311/_311/_311/_311/_311": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_42/_42/_42": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_249": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_284/_284/_284/_284": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_86/_86": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_477/_477/_477/_477": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_441/_441/_441": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_414/_414/_414/_414/_414/_414": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_27/_27/_27/_27/_27/_27": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_164/_164/_164/_164/_164/_164/_164/_164/_164": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_320/_320/_320/_320/_320/_320/_320/_320/_320": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_494/_494/_494/_494/_494": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_120/_120/_120/_120/_120/_120/_120": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_107/_107/_107/_107": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_211": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_100/_100/_100/_100/_100/_100": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_92/_92": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_252": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_495/_495/_495/_495": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_387/_387": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_281/_281/_281": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_318/_318/_318/_318/_318/_318/_318/_318/_318": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_83/_83/_83/_83/_83": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_25/_25/_25/_25/_25/_25": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_278/_278/_278": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_79/_79/_79/_79": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_201/_201/_201/_201/_201/_201/_201/_201": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_402/_402/_402/_402/_402/_402": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_119": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_299/_299/_299/_299/_299/_299/_299": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_3/_3": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_462/_462/_462/_462/_462/_462/_462/_462/_462": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_345/_345/_345/_345/_345": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_233/_233/_233/_233/_233/_233": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_82/_82": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_399/_399/_399/_399/_399/_399": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_9/_9/_9/_9": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_7/_7/_7/_7/_7/_7/_7/_7/_7": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_355/_355/_355/_355/_355/_355/_355/_355": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_34/_34/_34/_34/_34/_34/_34": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_334/_334/_334/_334/_334/_334/_334/_334/_334": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_236/_236/_236/_236/_236/_236/_236/_236": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_388/_388/_388/_388/_388/_388/_388/_388": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_168/_168/_168/_168/_168/_168/_168/_168/_168": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_307/_307/_307/_307/_307/_307/_307": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_407/_407": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_401/_401/_401/_401/_401/_401/_401/_401/_401": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_46/_46/_46/_46/_46": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_269/_269/_269/_269/_269/_269": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_147": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_369/_369": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_171/_171": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_353/_353/_353/_353": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_111/_111/_111/_111/_111/_111/_111": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_417/_417/_417": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_218": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_65/_65/_65": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_177/_177/_177/_177/_177/_177/_177/_177": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_232/_232/_232/_232/_232/_232/_232/_232/_232": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_181/_181/_181/_181/_181/_181": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_338/_338/_338/_338/_338/_338/_338": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_431/_431/_431": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_80/_80/_80/_80/_80/_80": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_31/_31/_31/_31/_31/_31/_31/_31": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_336/_336/_336/_336/_336/_336": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_292/_292/_292/_292/_292/_292/_292/_292": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_110/_110/_110/_110/_110/_110/_110/_110/_110": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_471/_471/_471": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_367/_367/_367/_367/_367/_367/_367/_367/_367": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_490/_490/_490/_490/_490/_490/_490/_490/_490": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_475/_475/_475/_475/_475/_475/_475/_475/_475": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_191/_191/_191": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_340/_340/_340/_340/_340/_340/_340": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_1/_1/_1/_1/_1/_1": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_262/_262/_262/_262/_262/_262/_262/_262": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_187/_187/_187": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_356/_356/_356/_356": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_323/_323/_323/_323": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_326/_326/_326/_326/_326": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_229/_229/_229": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_226/_226/_226/_226/_226/_226/_226/_226": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_90/_90/_90/_90/_90/_90/_90/_90": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_435/_435/_435/_435/_435/_435/_435/_435/_435": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_445/_445/_445/_445/_445/_445": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_95/_95/_95/_95": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_194/_194/_194/_194/_194": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_271": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_137/_137/_137/_137/_137/_137/_137": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_146/_146/_146/_146": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_158/_158/_158/_158/_158/_158/_158/_158": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_188/_188/_188/_188/_188/_188/_188": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_322/_322/_322/_322": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_283/_283/_283/_283/_283/_283/_283/_283": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_126/_126/_126/_126/_126/_126": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_348": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_385": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_315/_315/_315/_315/_315/_315/_315/_315/_315": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_241/_241/_241": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_485": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_32/_32/_32/_32/_32/_32": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_497": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_359/_359/_359/_359/_359/_359/_359/_359/_359": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_316/_316/_316": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_33/_33/_33": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_74/_74/_74/_74/_74/_74/_74/_74/_74": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_416/_416/_416/_416": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_277": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_295/_295/_295/_295": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_178/_178/_178/_178/_178/_178/_178": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_412/_412/_412": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_324/_324/_324/_324/_324/_324/_324/_324/_324": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_148": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_406": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_223/_223/_223/_223": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_11/_11": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_466/_466/_466/_466": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_63": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_35/_35/_35/_35/_35": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_248/_248/_248/_248": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_270/_270/_270/_270/_270/_270/_270": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_263/_263/_263/_263/_263/_263": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_459/_459": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_393/_393/_393/_393": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_426/_426/_426/_426/_426/_426/_426": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_64/_64/_64/_64/_64/_64": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_231/_231/_231/_231/_231/_231/_231": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_489/_489": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_305/_305/_305": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_371/_371/_371/_371/_371/_371/_371/_371/_371": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_344/_344/_344": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_40/_40/_40": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_478/_478/_478": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_349/_349/_349": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_491/_491/_491/_491/_491/_491": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_165/_165/_165/_165/_165/_165": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_6/_6": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_212/_212/_212/_212/_212/_212": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_85/_85/_85/_85/_85": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_128/_128/_128/_128": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_57/_57/_57/_57/_57/_57/_57/_57": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_159/_159": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_461/_461/_461/_461/_461": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_273/_273": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_377/_377": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_444/_444/_444/_444/_444/_444/_444": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_0/_0/_0": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_112/_112/_112": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_214/_214/_214/_214/_214/_214/_214/_214": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_54/_54/_54": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_192/_192/_192/_192/_192": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_10/_10/_10": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_224/_224/_224": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_460/_460/_460/_460/_460/_460/_460/_460": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_5/_5/_5": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_77/_77": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_481/_481/_481": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_195/_195/_195/_195/_195/_195/_195/_195": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_279": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_363/_363/_363/_363/_363/_363/_363": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_386/_386/_386/_386": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_234/_234/_234/_234/_234/_234": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_430/_430/_430/_430/_430/_430/_430/_430/_430": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_346/_346/_346/_346": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_290/_290/_290/_290": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_291/_291/_291/_291/_291/_291": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_288/_288/_288/_288": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_139/_139/_139/_139": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_448/_448/_448/_448": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_296/_296/_296/_296/_296/_296/_296/_296": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_375/_375/_375/_375/_375/_375/_375/_375": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_67/_67/_67/_67/_67/_67": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_91/_91": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_16/_16/_16/_16/_16/_16": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_69/_69/_69/_69/_69": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_157/_157/_157": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_19/_19/_19": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_114/_114/_114/_114/_114/_114/_114/_114/_114": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_235/_235/_235/_235/_235/_235/_235/_235/_235": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_162/_162/_162/_162/_162": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_209/_209/_209/_209/_209/_209/_209/_209": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_370/_370": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_180/_180": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_418/_418/_418/_418": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_331/_331/_331/_331/_331/_331/_331": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_132/_132/_132/_132/_132": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_419/_419/_419/_419/_419/_419": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_397/_397/_397/_397": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_94/_94/_94/_94/_94": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_274/_274/_274/_274/_274/_274/_274": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_115/_115": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_351/_351/_351/_351/_351/_351/_351/_351": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_238/_238/_238/_238": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_206/_206/_206/_206/_206/_206": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_357/_357/_357": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_468/_468": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_167/_167/_167/_167": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_217/_217/_217/_217/_217/_217/_217/_217": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_2/_2/_2/_2/_2": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_144/_144": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_213/_213/_213/_213/_213/_213/_213/_213/_213": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_482/_482/_482/_482/_482/_482": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_22/_22/_22/_22/_22/_22/_22/_22/_22": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_285/_285/_285": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_476/_476/_476/_476/_476/_476/_476": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_440": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_303/_303/_303/_303/_303/_303/_303/_303": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_61/_61": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_395/_395/_395/_395/_395/_395/_395/_395": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_56/_56/_56/_56/_56/_56/_56/_56": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_483/_483/_483/_483/_483/_483/_483/_483/_483": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_496/_496/_496/_496/_496": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_389/_389/_389/_389/_389/_389/_389/_389/_389": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_104/_104/_104": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_304/_304/_304/_304/_304/_304/_304/_304": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_29/_29/_29": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_443/_443/_443/_443": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_337/_337/_337/_337/_337/_337": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_267/_267/_267/_267/_267/_267/_267": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_208/_208/_208/_208/_208/_208/_208": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_189/_189/_189": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_239/_239": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_14": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_354/_354/_354/_354/_354/_354": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_250/_250/_250": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_258/_258/_258/_258/_258/_258/_258/_258": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_479/_479/_479/_479/_479/_479/_479/_479": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_221/_221/_221/_221": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_301/_301/_301/_301/_301/_301/_301": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_183/_183/_183": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_498/_498/_498/_498/_498/_498/_498/_498": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_12/_12/_12/_12/_12": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_286": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_265/_265/_265/_265/_265/_265": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_75": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_96/_96/_96/_96/_96/_96/_96": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_350/_350": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_391/_391/_391": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_51/_51/_51/_51/_51/_51/_51/_51": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_259/_259/_259/_259/_259/_259/_259/_259/_259": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_420/_420": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_117/_117/_117/_117/_117/_117": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_36": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_335": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_113/_113/_113/_113": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_439": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_376/_376/_376/_376/_376/_376/_376": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_261/_261": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_197/_197/_197/_197": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_202/_202/_202/_202": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_451/_451/_451/_451/_451/_451/_451/_451": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_140/_140/_140/_140/_140/_140": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_309/_309/_309/_309": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_392": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_400/_400/_400/_400/_400/_400": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_50/_50/_50/_50/_50/_50/_50/_50": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_436/_436/_436/_436": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_227/_227/_227/_227": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_328/_328/_328/_328": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_360/_360/_360/_360/_360/_360/_360/_360/_360": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_106/_106/_106/_106/_106/_106": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_247/_247/_247/_247/_247/_247": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_48/_48/_48": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_141/_141/_141/_141/_141/_141/_141": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_446/_446/_446/_446/_446/_446": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_365": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_240": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_493": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_105/_105/_105/_105/_105/_105/_105/_105/_105": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_396/_396/_396": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_242/_242/_242": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_447/_447/_447": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_76/_76/_76/_76": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_423/_423/_423/_423/_423": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_473/_473/_473": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_97/_97": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_230/_230/_230/_230": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_264/_264": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_456/_456/_456/_456/_456/_456": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_313/_313/_313/_313/_313/_313/_313": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_136": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_184/_184/_184/_184/_184/_184/_184/_184": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_163": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_228/_228/_228/_228/_228/_228/_228/_228/_228": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_275/_275": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_166/_166/_166": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_108": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_123/_123/_123/_123": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_339/_339/_339/_339/_339/_339/_339/_339/_339": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_411/_411/_411/_411/_411/_411/_411/_411/_411": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_53/_53": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_342/_342/_342/_342": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_204/_204": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_484/_484/_484/_484": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_266/_266/_266/_266/_266/_266": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_15/_15/_15/_15/_15/_15/_15": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_47/_47/_47/_47/_47/_47": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_38/_38/_38/_38/_38/_38/_38/_38/_38": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_467/_467/_467/_467": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_49/_49/_49/_49/_49/_49/_49/_49/_49": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_59/_59/_59": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_366": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_297/_297/_297/_297/_297/_297/_297": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_381/_381/_381": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_121/_121/_121/_121/_121/_121/_121/_121": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_289/_289/_289/_289/_289": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_174/_174": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_352/_352/_352/_352/_352": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_55/_55": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_24/_24/_24/_24/_24/_24/_24/_24/_24": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_332/_332/_332/_332": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_404/_404/_404/_404": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_293/_293/_293/_293/_293/_293": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_437/_437/_437/_437/_437/_437": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_429/_429/_429/_429/_429/_429/_429": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_432": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_151/_151/_151/_151/_151/_151": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_8/_8/_8/_8/_8/_8/_8/_8/_8": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_210/_210/_210/_210/_210/_210/_210": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_138/_138/_138/_138": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_99/_99/_99/_99": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_179/_179/_179/_179/_179/_179": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_58/_58/_58/_58": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_237/_237/_237/_237": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_255/_255/_255/_255/_255": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_244/_244/_244": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_125/_125/_125/_125/_125/_125/_125": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_66/_66/_66": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_499/_499/_499/_499/_499": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_182/_182/_182/_182": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_287/_287/_287/_287/_287": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_310/_310": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_41/_41": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_470/_470/_470/_470/_470/_470": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_203": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_382/_382/_382/_382/_382/_382/_382/_382/_382": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_452/_452/_452/_452/_452/_452/_452": OmitFunctions<unknown> & {
    [key: string]: string; 
};
"mocks/_486/_486": OmitFunctions<unknown> & {
    [key: string]: string; 
};
};

export type ApiGetParamsMap = {
[key: `x/${string}`]: OmitFunctions<{
  x: number
}>;
"": OmitFunctions<unknown>;
"mocks/_433/_433/_433/_433/_433/_433/_433/_433/_433": OmitFunctions<unknown>;
"mocks/_156": OmitFunctions<unknown>;
"mocks/_254/_254/_254/_254": OmitFunctions<unknown>;
"mocks/_378/_378/_378/_378/_378/_378/_378/_378/_378": OmitFunctions<unknown>;
"mocks/_93/_93/_93/_93/_93/_93": OmitFunctions<unknown>;
"mocks/_84/_84/_84/_84/_84/_84/_84/_84/_84": OmitFunctions<unknown>;
"mocks/_102/_102/_102/_102/_102": OmitFunctions<unknown>;
"mocks/_361/_361/_361": OmitFunctions<unknown>;
"mocks/_101": OmitFunctions<unknown>;
"mocks/_175/_175/_175/_175/_175/_175/_175/_175": OmitFunctions<unknown>;
"mocks/_20/_20/_20/_20": OmitFunctions<unknown>;
"mocks/_215/_215/_215/_215/_215": OmitFunctions<unknown>;
"mocks/_220/_220/_220/_220/_220/_220/_220/_220/_220": OmitFunctions<unknown>;
"mocks/_405": OmitFunctions<unknown>;
"mocks/_199/_199/_199": OmitFunctions<unknown>;
"mocks/_442/_442/_442/_442/_442/_442/_442/_442/_442": OmitFunctions<unknown>;
"mocks/_198/_198/_198/_198/_198/_198": OmitFunctions<unknown>;
"mocks/_413/_413/_413/_413/_413/_413/_413": OmitFunctions<unknown>;
"mocks/_216/_216/_216/_216": OmitFunctions<unknown>;
"mocks/_298/_298/_298/_298/_298/_298/_298": OmitFunctions<unknown>;
"mocks/_185/_185/_185/_185/_185": OmitFunctions<unknown>;
"mocks/_160/_160/_160": OmitFunctions<unknown>;
"mocks/_362/_362/_362": OmitFunctions<unknown>;
"mocks/_457/_457/_457/_457/_457/_457/_457/_457": OmitFunctions<unknown>;
"mocks/_72/_72": OmitFunctions<unknown>;
"mocks/_463/_463/_463/_463": OmitFunctions<unknown>;
"mocks/_314/_314/_314/_314": OmitFunctions<unknown>;
"mocks/_449/_449/_449/_449/_449/_449/_449": OmitFunctions<unknown>;
"mocks/_169/_169": OmitFunctions<unknown>;
"mocks/_472/_472/_472/_472/_472/_472/_472": OmitFunctions<unknown>;
"mocks/_458/_458/_458/_458/_458/_458/_458": OmitFunctions<unknown>;
"mocks/_474/_474/_474/_474/_474/_474": OmitFunctions<unknown>;
"mocks/_465/_465/_465/_465/_465/_465/_465/_465/_465": OmitFunctions<unknown>;
"mocks/_272/_272/_272/_272/_272/_272/_272": OmitFunctions<unknown>;
"mocks/_150/_150/_150/_150/_150/_150/_150": OmitFunctions<unknown>;
"mocks/_450/_450/_450": OmitFunctions<unknown>;
"mocks/_487/_487/_487/_487": OmitFunctions<unknown>;
"mocks/_28/_28/_28/_28": OmitFunctions<unknown>;
"mocks/_133/_133/_133/_133/_133": OmitFunctions<unknown>;
"mocks/_143/_143/_143/_143": OmitFunctions<unknown>;
"mocks/_26/_26/_26/_26/_26/_26/_26": OmitFunctions<unknown>;
"mocks/_424/_424/_424/_424": OmitFunctions<unknown>;
"mocks/_455/_455": OmitFunctions<unknown>;
"mocks/_306/_306/_306": OmitFunctions<unknown>;
"mocks/_109/_109/_109/_109/_109": OmitFunctions<unknown>;
"mocks/_98/_98/_98/_98/_98/_98/_98/_98/_98": OmitFunctions<unknown>;
"mocks/_319/_319/_319/_319/_319/_319/_319/_319/_319": OmitFunctions<unknown>;
"mocks/_256/_256": OmitFunctions<unknown>;
"mocks/_219/_219/_219/_219/_219": OmitFunctions<unknown>;
"mocks/_152/_152/_152/_152/_152": OmitFunctions<unknown>;
"mocks/_205/_205/_205/_205/_205/_205/_205/_205": OmitFunctions<unknown>;
"mocks/_131/_131/_131/_131/_131/_131": OmitFunctions<unknown>;
"mocks/_374": OmitFunctions<unknown>;
"mocks/_200/_200/_200/_200": OmitFunctions<unknown>;
"mocks/_207/_207/_207/_207": OmitFunctions<unknown>;
"mocks/_18/_18/_18/_18/_18": OmitFunctions<unknown>;
"mocks/_243/_243/_243/_243/_243": OmitFunctions<unknown>;
"mocks/_312/_312/_312/_312": OmitFunctions<unknown>;
"mocks/_330/_330": OmitFunctions<unknown>;
"mocks/_421/_421/_421": OmitFunctions<unknown>;
"mocks/_153/_153/_153/_153/_153/_153/_153": OmitFunctions<unknown>;
"mocks/_341/_341": OmitFunctions<unknown>;
"mocks/_4/_4/_4/_4/_4/_4": OmitFunctions<unknown>;
"mocks/_480/_480/_480/_480/_480": OmitFunctions<unknown>;
"mocks/_453": OmitFunctions<unknown>;
"mocks/_268/_268/_268/_268/_268/_268/_268": OmitFunctions<unknown>;
"mocks/_142/_142/_142/_142/_142/_142/_142/_142": OmitFunctions<unknown>;
"mocks/_427/_427/_427/_427/_427/_427/_427/_427": OmitFunctions<unknown>;
"mocks/_245/_245/_245/_245/_245": OmitFunctions<unknown>;
"mocks/_127/_127/_127/_127/_127/_127/_127/_127/_127": OmitFunctions<unknown>;
"mocks/_300": OmitFunctions<unknown>;
"mocks/_280": OmitFunctions<unknown>;
"mocks/_60/_60/_60/_60": OmitFunctions<unknown>;
"mocks/_13": OmitFunctions<unknown>;
"mocks/_390/_390/_390/_390/_390/_390/_390/_390": OmitFunctions<unknown>;
"mocks/_135/_135": OmitFunctions<unknown>;
"mocks/_408/_408/_408/_408/_408/_408/_408/_408": OmitFunctions<unknown>;
"mocks/_173/_173/_173": OmitFunctions<unknown>;
"mocks/_425/_425/_425/_425/_425/_425/_425": OmitFunctions<unknown>;
"mocks/_196/_196/_196/_196": OmitFunctions<unknown>;
"mocks/_347/_347/_347/_347/_347/_347": OmitFunctions<unknown>;
"mocks/_409/_409/_409/_409/_409/_409": OmitFunctions<unknown>;
"mocks/_88": OmitFunctions<unknown>;
"mocks/_373": OmitFunctions<unknown>;
"mocks/_253/_253/_253/_253/_253": OmitFunctions<unknown>;
"mocks/_78/_78/_78/_78": OmitFunctions<unknown>;
"mocks/_282/_282/_282/_282/_282/_282/_282/_282": OmitFunctions<unknown>;
"mocks/_294/_294/_294/_294/_294": OmitFunctions<unknown>;
"mocks/_52/_52/_52/_52/_52/_52/_52": OmitFunctions<unknown>;
"mocks/_398/_398/_398/_398/_398/_398": OmitFunctions<unknown>;
"mocks/_170/_170/_170/_170/_170/_170/_170": OmitFunctions<unknown>;
"mocks/_116": OmitFunctions<unknown>;
"mocks/_403/_403/_403/_403/_403": OmitFunctions<unknown>;
"mocks/_190/_190": OmitFunctions<unknown>;
"mocks/_222": OmitFunctions<unknown>;
"mocks/_327/_327/_327/_327/_327/_327/_327/_327/_327": OmitFunctions<unknown>;
"mocks/_154/_154/_154": OmitFunctions<unknown>;
"mocks/_410/_410/_410": OmitFunctions<unknown>;
"mocks/_422": OmitFunctions<unknown>;
"mocks/_415/_415/_415/_415/_415": OmitFunctions<unknown>;
"mocks/_358/_358/_358/_358/_358": OmitFunctions<unknown>;
"mocks/_43": OmitFunctions<unknown>;
"mocks/_492/_492": OmitFunctions<unknown>;
"mocks/_434/_434/_434/_434/_434": OmitFunctions<unknown>;
"mocks/_39/_39/_39/_39": OmitFunctions<unknown>;
"mocks/_122/_122/_122/_122/_122/_122/_122/_122": OmitFunctions<unknown>;
"mocks/_364/_364/_364/_364/_364/_364/_364/_364/_364": OmitFunctions<unknown>;
"mocks/_89/_89/_89": OmitFunctions<unknown>;
"mocks/_372/_372/_372/_372/_372": OmitFunctions<unknown>;
"mocks/_380/_380/_380/_380": OmitFunctions<unknown>;
"mocks/_23/_23/_23/_23": OmitFunctions<unknown>;
"mocks/_251/_251/_251/_251/_251/_251/_251/_251": OmitFunctions<unknown>;
"mocks/_193": OmitFunctions<unknown>;
"mocks/_186/_186/_186/_186/_186/_186": OmitFunctions<unknown>;
"mocks/_428/_428/_428/_428/_428/_428/_428/_428/_428": OmitFunctions<unknown>;
"mocks/_103/_103/_103/_103/_103/_103/_103": OmitFunctions<unknown>;
"mocks/_488/_488/_488/_488": OmitFunctions<unknown>;
"mocks/_17": OmitFunctions<unknown>;
"mocks/_454/_454/_454/_454/_454/_454/_454/_454": OmitFunctions<unknown>;
"mocks/_311/_311/_311/_311/_311/_311/_311/_311": OmitFunctions<unknown>;
"mocks/_42/_42/_42": OmitFunctions<unknown>;
"mocks/_249": OmitFunctions<unknown>;
"mocks/_284/_284/_284/_284": OmitFunctions<unknown>;
"mocks/_86/_86": OmitFunctions<unknown>;
"mocks/_477/_477/_477/_477": OmitFunctions<unknown>;
"mocks/_441/_441/_441": OmitFunctions<unknown>;
"mocks/_414/_414/_414/_414/_414/_414": OmitFunctions<unknown>;
"mocks/_27/_27/_27/_27/_27/_27": OmitFunctions<unknown>;
"mocks/_164/_164/_164/_164/_164/_164/_164/_164/_164": OmitFunctions<unknown>;
"mocks/_320/_320/_320/_320/_320/_320/_320/_320/_320": OmitFunctions<unknown>;
"mocks/_494/_494/_494/_494/_494": OmitFunctions<unknown>;
"mocks/_120/_120/_120/_120/_120/_120/_120": OmitFunctions<unknown>;
"mocks/_107/_107/_107/_107": OmitFunctions<unknown>;
"mocks/_211": OmitFunctions<unknown>;
"mocks/_100/_100/_100/_100/_100/_100": OmitFunctions<unknown>;
"mocks/_92/_92": OmitFunctions<unknown>;
"mocks/_252": OmitFunctions<unknown>;
"mocks/_495/_495/_495/_495": OmitFunctions<unknown>;
"mocks/_387/_387": OmitFunctions<unknown>;
"mocks/_281/_281/_281": OmitFunctions<unknown>;
"mocks/_318/_318/_318/_318/_318/_318/_318/_318/_318": OmitFunctions<unknown>;
"mocks/_83/_83/_83/_83/_83": OmitFunctions<unknown>;
"mocks/_25/_25/_25/_25/_25/_25": OmitFunctions<unknown>;
"mocks/_278/_278/_278": OmitFunctions<unknown>;
"mocks/_79/_79/_79/_79": OmitFunctions<unknown>;
"mocks/_201/_201/_201/_201/_201/_201/_201/_201": OmitFunctions<unknown>;
"mocks/_402/_402/_402/_402/_402/_402": OmitFunctions<unknown>;
"mocks/_119": OmitFunctions<unknown>;
"mocks/_299/_299/_299/_299/_299/_299/_299": OmitFunctions<unknown>;
"mocks/_3/_3": OmitFunctions<unknown>;
"mocks/_462/_462/_462/_462/_462/_462/_462/_462/_462": OmitFunctions<unknown>;
"mocks/_345/_345/_345/_345/_345": OmitFunctions<unknown>;
"mocks/_233/_233/_233/_233/_233/_233": OmitFunctions<unknown>;
"mocks/_82/_82": OmitFunctions<unknown>;
"mocks/_399/_399/_399/_399/_399/_399": OmitFunctions<unknown>;
"mocks/_9/_9/_9/_9": OmitFunctions<unknown>;
"mocks/_7/_7/_7/_7/_7/_7/_7/_7/_7": OmitFunctions<unknown>;
"mocks/_355/_355/_355/_355/_355/_355/_355/_355": OmitFunctions<unknown>;
"mocks/_34/_34/_34/_34/_34/_34/_34": OmitFunctions<unknown>;
"mocks/_334/_334/_334/_334/_334/_334/_334/_334/_334": OmitFunctions<unknown>;
"mocks/_236/_236/_236/_236/_236/_236/_236/_236": OmitFunctions<unknown>;
"mocks": OmitFunctions<unknown>;
"mocks/_388/_388/_388/_388/_388/_388/_388/_388": OmitFunctions<unknown>;
"mocks/_168/_168/_168/_168/_168/_168/_168/_168/_168": OmitFunctions<unknown>;
"mocks/_307/_307/_307/_307/_307/_307/_307": OmitFunctions<unknown>;
"mocks/_407/_407": OmitFunctions<unknown>;
"mocks/_401/_401/_401/_401/_401/_401/_401/_401/_401": OmitFunctions<unknown>;
"mocks/_46/_46/_46/_46/_46": OmitFunctions<unknown>;
"mocks/_269/_269/_269/_269/_269/_269": OmitFunctions<unknown>;
"mocks/_147": OmitFunctions<unknown>;
"mocks/_369/_369": OmitFunctions<unknown>;
"mocks/_171/_171": OmitFunctions<unknown>;
"mocks/_353/_353/_353/_353": OmitFunctions<unknown>;
"mocks/_111/_111/_111/_111/_111/_111/_111": OmitFunctions<unknown>;
"mocks/_417/_417/_417": OmitFunctions<unknown>;
"mocks/_218": OmitFunctions<unknown>;
"mocks/_65/_65/_65": OmitFunctions<unknown>;
"mocks/_177/_177/_177/_177/_177/_177/_177/_177": OmitFunctions<unknown>;
"mocks/_232/_232/_232/_232/_232/_232/_232/_232/_232": OmitFunctions<unknown>;
"mocks/_181/_181/_181/_181/_181/_181": OmitFunctions<unknown>;
"mocks/_338/_338/_338/_338/_338/_338/_338": OmitFunctions<unknown>;
"mocks/_431/_431/_431": OmitFunctions<unknown>;
"mocks/_80/_80/_80/_80/_80/_80": OmitFunctions<unknown>;
"mocks/_31/_31/_31/_31/_31/_31/_31/_31": OmitFunctions<unknown>;
"mocks/_336/_336/_336/_336/_336/_336": OmitFunctions<unknown>;
"mocks/_292/_292/_292/_292/_292/_292/_292/_292": OmitFunctions<unknown>;
"mocks/_110/_110/_110/_110/_110/_110/_110/_110/_110": OmitFunctions<unknown>;
"mocks/_471/_471/_471": OmitFunctions<unknown>;
"mocks/_367/_367/_367/_367/_367/_367/_367/_367/_367": OmitFunctions<unknown>;
"mocks/_490/_490/_490/_490/_490/_490/_490/_490/_490": OmitFunctions<unknown>;
"mocks/_475/_475/_475/_475/_475/_475/_475/_475/_475": OmitFunctions<unknown>;
"mocks/_191/_191/_191": OmitFunctions<unknown>;
"mocks/_340/_340/_340/_340/_340/_340/_340": OmitFunctions<unknown>;
"mocks/_1/_1/_1/_1/_1/_1": OmitFunctions<unknown>;
"mocks/_262/_262/_262/_262/_262/_262/_262/_262": OmitFunctions<unknown>;
"mocks/_187/_187/_187": OmitFunctions<unknown>;
"mocks/_356/_356/_356/_356": OmitFunctions<unknown>;
"mocks/_323/_323/_323/_323": OmitFunctions<unknown>;
"mocks/_326/_326/_326/_326/_326": OmitFunctions<unknown>;
"mocks/_229/_229/_229": OmitFunctions<unknown>;
"mocks/_226/_226/_226/_226/_226/_226/_226/_226": OmitFunctions<unknown>;
"mocks/_90/_90/_90/_90/_90/_90/_90/_90": OmitFunctions<unknown>;
"mocks/_435/_435/_435/_435/_435/_435/_435/_435/_435": OmitFunctions<unknown>;
"mocks/_445/_445/_445/_445/_445/_445": OmitFunctions<unknown>;
"mocks/_95/_95/_95/_95": OmitFunctions<unknown>;
"mocks/_194/_194/_194/_194/_194": OmitFunctions<unknown>;
"mocks/_271": OmitFunctions<unknown>;
"mocks/_137/_137/_137/_137/_137/_137/_137": OmitFunctions<unknown>;
"mocks/_146/_146/_146/_146": OmitFunctions<unknown>;
"mocks/_158/_158/_158/_158/_158/_158/_158/_158": OmitFunctions<unknown>;
"mocks/_188/_188/_188/_188/_188/_188/_188": OmitFunctions<unknown>;
"mocks/_322/_322/_322/_322": OmitFunctions<unknown>;
"mocks/_283/_283/_283/_283/_283/_283/_283/_283": OmitFunctions<unknown>;
"mocks/_126/_126/_126/_126/_126/_126": OmitFunctions<unknown>;
"mocks/_348": OmitFunctions<unknown>;
"mocks/_385": OmitFunctions<unknown>;
"mocks/_315/_315/_315/_315/_315/_315/_315/_315/_315": OmitFunctions<unknown>;
"mocks/_241/_241/_241": OmitFunctions<unknown>;
"mocks/_485": OmitFunctions<unknown>;
"mocks/_32/_32/_32/_32/_32/_32": OmitFunctions<unknown>;
"mocks/_497": OmitFunctions<unknown>;
"mocks/_359/_359/_359/_359/_359/_359/_359/_359/_359": OmitFunctions<unknown>;
"mocks/_316/_316/_316": OmitFunctions<unknown>;
"mocks/_33/_33/_33": OmitFunctions<unknown>;
"mocks/_74/_74/_74/_74/_74/_74/_74/_74/_74": OmitFunctions<unknown>;
"mocks/_416/_416/_416/_416": OmitFunctions<unknown>;
"mocks/_277": OmitFunctions<unknown>;
"mocks/_295/_295/_295/_295": OmitFunctions<unknown>;
"mocks/_178/_178/_178/_178/_178/_178/_178": OmitFunctions<unknown>;
"mocks/_412/_412/_412": OmitFunctions<unknown>;
"mocks/_324/_324/_324/_324/_324/_324/_324/_324/_324": OmitFunctions<unknown>;
"mocks/_148": OmitFunctions<unknown>;
"mocks/_406": OmitFunctions<unknown>;
"mocks/_223/_223/_223/_223": OmitFunctions<unknown>;
"mocks/_11/_11": OmitFunctions<unknown>;
"mocks/_466/_466/_466/_466": OmitFunctions<unknown>;
"mocks/_63": OmitFunctions<unknown>;
"mocks/_35/_35/_35/_35/_35": OmitFunctions<unknown>;
"mocks/_248/_248/_248/_248": OmitFunctions<unknown>;
"mocks/_270/_270/_270/_270/_270/_270/_270": OmitFunctions<unknown>;
"mocks/_263/_263/_263/_263/_263/_263": OmitFunctions<unknown>;
"mocks/_459/_459": OmitFunctions<unknown>;
"mocks/_393/_393/_393/_393": OmitFunctions<unknown>;
"mocks/_426/_426/_426/_426/_426/_426/_426": OmitFunctions<unknown>;
"mocks/_64/_64/_64/_64/_64/_64": OmitFunctions<unknown>;
"mocks/_231/_231/_231/_231/_231/_231/_231": OmitFunctions<unknown>;
"mocks/_489/_489": OmitFunctions<unknown>;
"mocks/_305/_305/_305": OmitFunctions<unknown>;
"mocks/_371/_371/_371/_371/_371/_371/_371/_371/_371": OmitFunctions<unknown>;
"mocks/_344/_344/_344": OmitFunctions<unknown>;
"mocks/_40/_40/_40": OmitFunctions<unknown>;
"mocks/_478/_478/_478": OmitFunctions<unknown>;
"mocks/_349/_349/_349": OmitFunctions<unknown>;
"mocks/_491/_491/_491/_491/_491/_491": OmitFunctions<unknown>;
"mocks/_165/_165/_165/_165/_165/_165": OmitFunctions<unknown>;
"mocks/_6/_6": OmitFunctions<unknown>;
"mocks/_212/_212/_212/_212/_212/_212": OmitFunctions<unknown>;
"mocks/_85/_85/_85/_85/_85": OmitFunctions<unknown>;
"mocks/_128/_128/_128/_128": OmitFunctions<unknown>;
"mocks/_57/_57/_57/_57/_57/_57/_57/_57": OmitFunctions<unknown>;
"mocks/_159/_159": OmitFunctions<unknown>;
"mocks/_461/_461/_461/_461/_461": OmitFunctions<unknown>;
"mocks/_273/_273": OmitFunctions<unknown>;
"mocks/_377/_377": OmitFunctions<unknown>;
"mocks/_444/_444/_444/_444/_444/_444/_444": OmitFunctions<unknown>;
"mocks/_0/_0/_0": OmitFunctions<unknown>;
"mocks/_112/_112/_112": OmitFunctions<unknown>;
"mocks/_214/_214/_214/_214/_214/_214/_214/_214": OmitFunctions<unknown>;
"mocks/_54/_54/_54": OmitFunctions<unknown>;
"mocks/_192/_192/_192/_192/_192": OmitFunctions<unknown>;
"mocks/_10/_10/_10": OmitFunctions<unknown>;
"mocks/_224/_224/_224": OmitFunctions<unknown>;
"mocks/_460/_460/_460/_460/_460/_460/_460/_460": OmitFunctions<unknown>;
"mocks/_5/_5/_5": OmitFunctions<unknown>;
"mocks/_77/_77": OmitFunctions<unknown>;
"mocks/_481/_481/_481": OmitFunctions<unknown>;
"mocks/_195/_195/_195/_195/_195/_195/_195/_195": OmitFunctions<unknown>;
"mocks/_279": OmitFunctions<unknown>;
"mocks/_363/_363/_363/_363/_363/_363/_363": OmitFunctions<unknown>;
"mocks/_386/_386/_386/_386": OmitFunctions<unknown>;
"mocks/_234/_234/_234/_234/_234/_234": OmitFunctions<unknown>;
"mocks/_430/_430/_430/_430/_430/_430/_430/_430/_430": OmitFunctions<unknown>;
"mocks/_346/_346/_346/_346": OmitFunctions<unknown>;
"mocks/_290/_290/_290/_290": OmitFunctions<unknown>;
"mocks/_291/_291/_291/_291/_291/_291": OmitFunctions<unknown>;
"mocks/_288/_288/_288/_288": OmitFunctions<unknown>;
"mocks/_139/_139/_139/_139": OmitFunctions<unknown>;
"mocks/_448/_448/_448/_448": OmitFunctions<unknown>;
"mocks/_296/_296/_296/_296/_296/_296/_296/_296": OmitFunctions<unknown>;
"mocks/_375/_375/_375/_375/_375/_375/_375/_375": OmitFunctions<unknown>;
"mocks/_67/_67/_67/_67/_67/_67": OmitFunctions<unknown>;
"mocks/_91/_91": OmitFunctions<unknown>;
"mocks/_16/_16/_16/_16/_16/_16": OmitFunctions<unknown>;
"mocks/_69/_69/_69/_69/_69": OmitFunctions<unknown>;
"mocks/_157/_157/_157": OmitFunctions<unknown>;
"mocks/_19/_19/_19": OmitFunctions<unknown>;
"mocks/_114/_114/_114/_114/_114/_114/_114/_114/_114": OmitFunctions<unknown>;
"mocks/_235/_235/_235/_235/_235/_235/_235/_235/_235": OmitFunctions<unknown>;
"mocks/_162/_162/_162/_162/_162": OmitFunctions<unknown>;
"mocks/_209/_209/_209/_209/_209/_209/_209/_209": OmitFunctions<unknown>;
"mocks/_370/_370": OmitFunctions<unknown>;
"mocks/_180/_180": OmitFunctions<unknown>;
"mocks/_418/_418/_418/_418": OmitFunctions<unknown>;
"mocks/_331/_331/_331/_331/_331/_331/_331": OmitFunctions<unknown>;
"mocks/_132/_132/_132/_132/_132": OmitFunctions<unknown>;
"mocks/_419/_419/_419/_419/_419/_419": OmitFunctions<unknown>;
"mocks/_397/_397/_397/_397": OmitFunctions<unknown>;
"mocks/_94/_94/_94/_94/_94": OmitFunctions<unknown>;
"mocks/_274/_274/_274/_274/_274/_274/_274": OmitFunctions<unknown>;
"mocks/_115/_115": OmitFunctions<unknown>;
"mocks/_351/_351/_351/_351/_351/_351/_351/_351": OmitFunctions<unknown>;
"mocks/_238/_238/_238/_238": OmitFunctions<unknown>;
"mocks/_206/_206/_206/_206/_206/_206": OmitFunctions<unknown>;
"mocks/_357/_357/_357": OmitFunctions<unknown>;
"mocks/_468/_468": OmitFunctions<unknown>;
"mocks/_167/_167/_167/_167": OmitFunctions<unknown>;
"mocks/_217/_217/_217/_217/_217/_217/_217/_217": OmitFunctions<unknown>;
"mocks/_2/_2/_2/_2/_2": OmitFunctions<unknown>;
"mocks/_144/_144": OmitFunctions<unknown>;
"mocks/_213/_213/_213/_213/_213/_213/_213/_213/_213": OmitFunctions<unknown>;
"mocks/_482/_482/_482/_482/_482/_482": OmitFunctions<unknown>;
"mocks/_22/_22/_22/_22/_22/_22/_22/_22/_22": OmitFunctions<unknown>;
"mocks/_285/_285/_285": OmitFunctions<unknown>;
"mocks/_476/_476/_476/_476/_476/_476/_476": OmitFunctions<unknown>;
"mocks/_440": OmitFunctions<unknown>;
"mocks/_303/_303/_303/_303/_303/_303/_303/_303": OmitFunctions<unknown>;
"mocks/_61/_61": OmitFunctions<unknown>;
"mocks/_395/_395/_395/_395/_395/_395/_395/_395": OmitFunctions<unknown>;
"mocks/_56/_56/_56/_56/_56/_56/_56/_56": OmitFunctions<unknown>;
"mocks/_483/_483/_483/_483/_483/_483/_483/_483/_483": OmitFunctions<unknown>;
"mocks/_496/_496/_496/_496/_496": OmitFunctions<unknown>;
"mocks/_389/_389/_389/_389/_389/_389/_389/_389/_389": OmitFunctions<unknown>;
"mocks/_104/_104/_104": OmitFunctions<unknown>;
"mocks/_304/_304/_304/_304/_304/_304/_304/_304": OmitFunctions<unknown>;
"mocks/_29/_29/_29": OmitFunctions<unknown>;
"mocks/_443/_443/_443/_443": OmitFunctions<unknown>;
"mocks/_337/_337/_337/_337/_337/_337": OmitFunctions<unknown>;
"mocks/_267/_267/_267/_267/_267/_267/_267": OmitFunctions<unknown>;
"mocks/_208/_208/_208/_208/_208/_208/_208": OmitFunctions<unknown>;
"mocks/_189/_189/_189": OmitFunctions<unknown>;
"mocks/_239/_239": OmitFunctions<unknown>;
"mocks/_14": OmitFunctions<unknown>;
"mocks/_354/_354/_354/_354/_354/_354": OmitFunctions<unknown>;
"mocks/_250/_250/_250": OmitFunctions<unknown>;
"mocks/_258/_258/_258/_258/_258/_258/_258/_258": OmitFunctions<unknown>;
"mocks/_479/_479/_479/_479/_479/_479/_479/_479": OmitFunctions<unknown>;
"mocks/_221/_221/_221/_221": OmitFunctions<unknown>;
"mocks/_301/_301/_301/_301/_301/_301/_301": OmitFunctions<unknown>;
"mocks/_183/_183/_183": OmitFunctions<unknown>;
"mocks/_498/_498/_498/_498/_498/_498/_498/_498": OmitFunctions<unknown>;
"mocks/_12/_12/_12/_12/_12": OmitFunctions<unknown>;
"mocks/_286": OmitFunctions<unknown>;
"mocks/_265/_265/_265/_265/_265/_265": OmitFunctions<unknown>;
"mocks/_75": OmitFunctions<unknown>;
"mocks/_96/_96/_96/_96/_96/_96/_96": OmitFunctions<unknown>;
"mocks/_350/_350": OmitFunctions<unknown>;
"mocks/_391/_391/_391": OmitFunctions<unknown>;
"mocks/_51/_51/_51/_51/_51/_51/_51/_51": OmitFunctions<unknown>;
"mocks/_259/_259/_259/_259/_259/_259/_259/_259/_259": OmitFunctions<unknown>;
"mocks/_420/_420": OmitFunctions<unknown>;
"mocks/_117/_117/_117/_117/_117/_117": OmitFunctions<unknown>;
"mocks/_36": OmitFunctions<unknown>;
"mocks/_335": OmitFunctions<unknown>;
"mocks/_113/_113/_113/_113": OmitFunctions<unknown>;
"mocks/_439": OmitFunctions<unknown>;
"mocks/_376/_376/_376/_376/_376/_376/_376": OmitFunctions<unknown>;
"mocks/_261/_261": OmitFunctions<unknown>;
"mocks/_197/_197/_197/_197": OmitFunctions<unknown>;
"mocks/_202/_202/_202/_202": OmitFunctions<unknown>;
"mocks/_451/_451/_451/_451/_451/_451/_451/_451": OmitFunctions<unknown>;
"mocks/_140/_140/_140/_140/_140/_140": OmitFunctions<unknown>;
"mocks/_309/_309/_309/_309": OmitFunctions<unknown>;
"mocks/_392": OmitFunctions<unknown>;
"mocks/_400/_400/_400/_400/_400/_400": OmitFunctions<unknown>;
"mocks/_50/_50/_50/_50/_50/_50/_50/_50": OmitFunctions<unknown>;
"mocks/_436/_436/_436/_436": OmitFunctions<unknown>;
"mocks/_227/_227/_227/_227": OmitFunctions<unknown>;
"mocks/_328/_328/_328/_328": OmitFunctions<unknown>;
"mocks/_360/_360/_360/_360/_360/_360/_360/_360/_360": OmitFunctions<unknown>;
"mocks/_106/_106/_106/_106/_106/_106": OmitFunctions<unknown>;
"mocks/_247/_247/_247/_247/_247/_247": OmitFunctions<unknown>;
"mocks/_48/_48/_48": OmitFunctions<unknown>;
"mocks/_141/_141/_141/_141/_141/_141/_141": OmitFunctions<unknown>;
"mocks/_446/_446/_446/_446/_446/_446": OmitFunctions<unknown>;
"mocks/_365": OmitFunctions<unknown>;
"mocks/_240": OmitFunctions<unknown>;
"mocks/_493": OmitFunctions<unknown>;
"mocks/_105/_105/_105/_105/_105/_105/_105/_105/_105": OmitFunctions<unknown>;
"mocks/_396/_396/_396": OmitFunctions<unknown>;
"mocks/_242/_242/_242": OmitFunctions<unknown>;
"mocks/_447/_447/_447": OmitFunctions<unknown>;
"mocks/_76/_76/_76/_76": OmitFunctions<unknown>;
"mocks/_423/_423/_423/_423/_423": OmitFunctions<unknown>;
"mocks/_473/_473/_473": OmitFunctions<unknown>;
"mocks/_97/_97": OmitFunctions<unknown>;
"mocks/_230/_230/_230/_230": OmitFunctions<unknown>;
"mocks/_264/_264": OmitFunctions<unknown>;
"mocks/_456/_456/_456/_456/_456/_456": OmitFunctions<unknown>;
"mocks/_313/_313/_313/_313/_313/_313/_313": OmitFunctions<unknown>;
"mocks/_136": OmitFunctions<unknown>;
"mocks/_184/_184/_184/_184/_184/_184/_184/_184": OmitFunctions<unknown>;
"mocks/_163": OmitFunctions<unknown>;
"mocks/_228/_228/_228/_228/_228/_228/_228/_228/_228": OmitFunctions<unknown>;
"mocks/_275/_275": OmitFunctions<unknown>;
"mocks/_166/_166/_166": OmitFunctions<unknown>;
"mocks/_108": OmitFunctions<unknown>;
"mocks/_123/_123/_123/_123": OmitFunctions<unknown>;
"mocks/_339/_339/_339/_339/_339/_339/_339/_339/_339": OmitFunctions<unknown>;
"mocks/_411/_411/_411/_411/_411/_411/_411/_411/_411": OmitFunctions<unknown>;
"mocks/_53/_53": OmitFunctions<unknown>;
"mocks/_342/_342/_342/_342": OmitFunctions<unknown>;
"mocks/_204/_204": OmitFunctions<unknown>;
"mocks/_484/_484/_484/_484": OmitFunctions<unknown>;
"mocks/_266/_266/_266/_266/_266/_266": OmitFunctions<unknown>;
"mocks/_15/_15/_15/_15/_15/_15/_15": OmitFunctions<unknown>;
"mocks/_47/_47/_47/_47/_47/_47": OmitFunctions<unknown>;
"mocks/_38/_38/_38/_38/_38/_38/_38/_38/_38": OmitFunctions<unknown>;
"mocks/_467/_467/_467/_467": OmitFunctions<unknown>;
"mocks/_49/_49/_49/_49/_49/_49/_49/_49/_49": OmitFunctions<unknown>;
"mocks/_59/_59/_59": OmitFunctions<unknown>;
"mocks/_366": OmitFunctions<unknown>;
"mocks/_297/_297/_297/_297/_297/_297/_297": OmitFunctions<unknown>;
"mocks/_381/_381/_381": OmitFunctions<unknown>;
"mocks/_121/_121/_121/_121/_121/_121/_121/_121": OmitFunctions<unknown>;
"mocks/_289/_289/_289/_289/_289": OmitFunctions<unknown>;
"mocks/_174/_174": OmitFunctions<unknown>;
"mocks/_352/_352/_352/_352/_352": OmitFunctions<unknown>;
"mocks/_55/_55": OmitFunctions<unknown>;
"mocks/_24/_24/_24/_24/_24/_24/_24/_24/_24": OmitFunctions<unknown>;
"mocks/_332/_332/_332/_332": OmitFunctions<unknown>;
"mocks/_404/_404/_404/_404": OmitFunctions<unknown>;
"mocks/_293/_293/_293/_293/_293/_293": OmitFunctions<unknown>;
"mocks/_437/_437/_437/_437/_437/_437": OmitFunctions<unknown>;
"mocks/_429/_429/_429/_429/_429/_429/_429": OmitFunctions<unknown>;
"mocks/_432": OmitFunctions<unknown>;
"mocks/_151/_151/_151/_151/_151/_151": OmitFunctions<unknown>;
"mocks/_8/_8/_8/_8/_8/_8/_8/_8/_8": OmitFunctions<unknown>;
"mocks/_210/_210/_210/_210/_210/_210/_210": OmitFunctions<unknown>;
"mocks/_138/_138/_138/_138": OmitFunctions<unknown>;
"mocks/_99/_99/_99/_99": OmitFunctions<unknown>;
"mocks/_179/_179/_179/_179/_179/_179": OmitFunctions<unknown>;
"mocks/_58/_58/_58/_58": OmitFunctions<unknown>;
"mocks/_237/_237/_237/_237": OmitFunctions<unknown>;
"mocks/_255/_255/_255/_255/_255": OmitFunctions<unknown>;
"mocks/_244/_244/_244": OmitFunctions<unknown>;
"mocks/_125/_125/_125/_125/_125/_125/_125": OmitFunctions<unknown>;
"mocks/_66/_66/_66": OmitFunctions<unknown>;
"mocks/_499/_499/_499/_499/_499": OmitFunctions<unknown>;
"mocks/_182/_182/_182/_182": OmitFunctions<unknown>;
"mocks/_287/_287/_287/_287/_287": OmitFunctions<unknown>;
"mocks/_310/_310": OmitFunctions<unknown>;
"mocks/_41/_41": OmitFunctions<unknown>;
"mocks/_470/_470/_470/_470/_470/_470": OmitFunctions<unknown>;
"mocks/_203": OmitFunctions<unknown>;
"mocks/_382/_382/_382/_382/_382/_382/_382/_382/_382": OmitFunctions<unknown>;
"mocks/_452/_452/_452/_452/_452/_452/_452": OmitFunctions<unknown>;
"mocks/_486/_486": OmitFunctions<unknown>;
};

export type ApiGetBody<U extends string> = U extends keyof ApiGetBodyMap ? ApiGetBodyMap[U] : any;

export type ApiGetResponse<U extends string> = U extends keyof ApiGetResponseMap ? ApiGetResponseMap[U] : any;

export type ApiGetHeaders<U extends string> = U extends keyof ApiGetHeadersMap ? ApiGetHeadersMap[U] : any;

export type ApiGetParams<U extends string> = U extends keyof ApiGetParamsMap ? ApiGetParamsMap[U] : any;

export type ApiGet = <U extends ApiGetUrl | string>(
    url: U,
    config?: AsyncEmitOptions & Merge<{
        headers?: ApiGetHeaders<U>; 
        params?: ApiGetParams<U>; 
    }, RequestConfig<ApiGetBody<U>>>
) => Promise<AxiosResponse<ApiGetResponse<U>>>;

            


export type ApiDelete = <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AsyncEmitOptions & RequestConfig<D>) => Promise<R>;;

            