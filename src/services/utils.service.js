class UtilsService {

    static formatPrice(number) {
        var rgx = /(\d+)(\d{3})/;
	    while (rgx.test(number)) {
            // eslint-disable-next-line
		    number = number.replace(rgx, '$1' + '.' + '$2');
	    }
        return number
    }

    static formatDecimals(decimals) {
        if(!decimals) return '00';
        if(decimals.toString().length === 1) {
            return decimals + '0';
        }
        return decimals
    }

}

export default UtilsService;