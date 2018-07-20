
const SMALL_TEXT=200;
const SMALL_TABLE_HEADER_CSS = 'small-table-header';
const MEDIUM_TABLE_HEADER_CSS = 'medium-table-header';
const LARGE_TABLE_HEADER_CSS = 'large-table-header';
const DEFAULT_COLUMN_WIDTH = 75;

/**
 * The following method will determine the column width
 */
function getColumnWidth( columnNames, width ){
    if(columnNames && columnNames.length >1 ){
        return (width/columnNames.length);
    }
    return DEFAULT_COLUMN_WIDTH;
}

/**
 * Will return the appropriate header text size based on component width
 * @param {component} width 
 */
function getHeaderTextStyles( width ){
    if( width < SMALL_TEXT ){
        return SMALL_TABLE_HEADER_CSS ;
    }else if( width < (2*SMALL_TEXT)  ){
        return MEDIUM_TABLE_HEADER_CSS;
    }else{
        return LARGE_TABLE_HEADER_CSS;
    }
}

module.exports = {
    getColumnWidth,
    getHeaderTextStyles
};