enum ImageMode {
    /*Helper ARGB formats. Used internally*/
    // ARGB8332,      
    ARGB8565,
    // ICF_TRUE_COLOR_ARGB8565_RBSWAP,
    ARGB8888,
    A1,
    A2,
    A4,
    A8,
    I1,
    I2,
    I4,
    I8,
    RAW,
    // RAW_CHROMA = RAW,
    RAW_ALPHA,

    /*Helper formats if C arrays contains all true color formats (used in "download")*/
    // CF_TRUE_COLOR,          
    // CF_TRUE_COLOR_ALPHA,
    // CF_TRUE_COLOR_CHROMA,

    /*New formats in v8.3+*/
    RGB565A8
};

class ImageModeUtil {
    public static isTrueColor(mode: string|ImageMode) {
        if(typeof mode != 'string')
            mode = ImageMode[mode];
        return mode.startsWith("CF_TRUE_COLOR");
    }
}

enum OutputMode {
    C,
    BIN
}


const BINARY_FORMAT_PREFIX = "ICF_TRUE_COLOR_";

export { ImageMode, ImageModeUtil, OutputMode, BINARY_FORMAT_PREFIX };
