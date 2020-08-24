const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get PageLoadedIdentifier () {return $("div[class*='mapboxgl-marker ']")};

    //map identifiers
    get MapFrame () { return $("canvas[class='mapboxgl-canvas']") };
    get MapIcons () { return $$("div[class*='mapboxgl-marker ']")};

    //sidebar identifiers
    get SidebarHeader() {return $("div[aria-expanded='true']")};
    get SidebarSubVendor() {return $("div[class*='MuiCollapse-entered']")};
    get SidebarList() {return $("div[class*='sidebar-list']")};
    get SidebarOrganizationName() {return $(".//div[@aria-expanded='true']/div")};
    get SidebarFields() {return $$(".//div[contains(@class, 'sidebar-list')]/child::*")};

    ConcreteField({fieldIndex}) { 
        return $(`.//div[contains(@class, 'sidebar-list')]/child::*/span[contains(text(), 'Fresno State Demo Field ${fieldIndex}')]`);
    }

    // weather info
    get ReportingWeatherCardOneDay() {return $$("//div[contains(@class, 'weather-card-text-alignment')]/child::div[contains(text(), '24 hour rainfall')]")};
    get ReportingWeatherCardThreeDays() {return $$("//div[contains(@class, 'weather-card-text-alignment')]/child::div[contains(text(), '3 day rainfall')]")};
    get ReportingListOfDevices() {return $$("div[class*='creatable-organization-equipment-item']")};
    
    //Pivot
    get PivotCardStatusFields() {return $$("span[class='card-text-lg']")};
    get PivotDevices() {return $$(".//strong[contains(text(), 'Pivot')]/ancestor::div[@class='new-map-card']/descendant::div[@class='sidebar-list']/child::div")};

    //Equipment
    get EquipmentStatusFields() {
        return $$("//div[@class='equipment-info']/descendant::div[contains(@class, 'text-capitalize')]")};
    get EquipmentLastUpdateFields() {
        return $$("//div[@class='equipment-info']/descendant::div[contains(text(), 'Last Status Update')]/following-sibling::div[@class='text-position']")};
    get EquipmentListOfDevices() {
        return $$("//strong[contains(text(), 'Equipment')]/ancestor::div[@class='new-map-card']/descendant::div[@class='sidebar-list']/child::div[contains(@class, 'creatable-organization-equipment-item')]")};

    //Ponds
    get PondsStatusFields () {return $$("//div[contains(text(), 'Current Level')]/following-sibling::div/child::span")};
    get PondsListOfDevices() {
        return $$("//strong[contains(text(), 'Ponds')]/ancestor::div[@class='bb-16']/descendant::div[@class='sidebar-list']/child::div[contains(@class, 'creatable-organization-equipment-item')]")};
}

module.exports = new HomePage();
