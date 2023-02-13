module.exports = class TariffTestDataBuilder {

    constructor(){
        this.cylinder = 125;
        this.model = 2020;
        this.birthDate = '1998-10-31';
        this.circulationCity = 'cali'
    }

    setCylinder(cylinder) {
        this.cylinder = cylinder;
        return this;
    }

    setModel(model) {
        this.model = model;
        return this;
    }

    setBirthDate(birthDate) {
        this.birthDate = birthDate;
        return this;
    }
    
    setCirculationCity(circulationCity) {
        this.circulationCity = circulationCity;
        return this;
    }

    buildRequest() {
        return `cylinder=${this.cylinder}&model=${this.model}&birthdate=${this.birthDate}&circulationCity=${this.circulationCity }`;  
    }

    buildRequestWithout(property) {
        const  requestString = this.buildRequest();
        const properties = requestString.split('&');
        return  properties.filter(item => !item.toString().includes(property)).toString().replaceAll(',','&');
          
    }
}