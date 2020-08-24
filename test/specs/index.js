const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('Basic actions suite', () => {
    it('Should login with valid credentials and check base fields existance', () => {
        //- 'Sign in with username :username:, password :password:'
        LoginPage.open('https://staging.realmfive.com');
        LoginPage.login('qa@realmfive.com', 'walruswalruswalrus');

        HomePage.PageLoadedIdentifier.waitForExist({ interval: 500 });
        //- 'Confirm that you see a map with field boundaries, device icons and a sidebar'
        expect(HomePage.MapFrame).toBeDefined();
        expect(HomePage.MapIcons.length).toBeGreaterThanOrEqual(1);
        expect(HomePage.SidebarHeader).toBeDefined();
        expect(HomePage.SidebarSubVendor).toBeDefined();
        expect(HomePage.SidebarList).toBeDefined();

        //- 'Confirm that the top of the sidebar says :organization:'
        // NOTE!!! Actual - Fresno State Demo
        expect(HomePage.SidebarOrganizationName.getText()).toEqual('Fresno State Demo');
        //- 'Click on :organization: Field 5 on the sidebar'
        HomePage.ConcreteField({fieldIndex: 5}).click();

        HomePage.SidebarList.waitForExist({ interval: 500 });
        //- 'Confirm that there is data displaying for 24 hour rainfall and 3 day rainfall in the Weather Current card'
        expect(HomePage.ReportingWeatherCardOneDay).toBeDefined();
        expect(HomePage.ReportingWeatherCardThreeDays).toBeDefined();

        //- 'Confirm that there are 3 rows of devices in the Weather Current card'
        // NOTE!!! Actual 5
        expect(HomePage.ReportingListOfDevices.length).toBeGreaterThanOrEqual(3);

        //- 'Confirm that a direction and fault status displays in the Pivot card'
        expect(HomePage.PivotCardStatusFields[0]).toBeDefined();
        expect(HomePage.PivotCardStatusFields[1]).toBeDefined();

        //  - 'Confirm that there is one device row in the Pivot card
        expect(HomePage.PivotDevices.length).toEqual(1);

        //  - 'Confirm that a status and last status update display on the Equipment card'
        expect(HomePage.EquipmentStatusFields.length).toBeGreaterThanOrEqual(1);
        expect(HomePage.EquipmentLastUpdateFields).toBeDefined();

        //   - 'Confirm that there are two device rows on the Equipment card'
        expect(HomePage.EquipmentListOfDevices.length).toEqual(2);

        //   - 'Confirm that a current level displays on the Ponds card'
        expect(HomePage.PondsStatusFields).toBeDefined();

        //   - 'Confirm that there is one device row in the Ponds card'
        expect(HomePage.PondsListOfDevices.length).toEqual(1);

//   - 'Select the French ColumnBard Weather Station Device'???
//   - 'Confirm that the context menu opens and the device name and ID display at the top left'
//   - 'Confirm charts for rainfall, temperature, humidity, pressure, and wind speed load and display data'
//   - 'Confirm that those charts also load when 1 week, 1 month and 3 month timeframes are selected'
//   - 'Click on the Health tab at the top right of the context menu'
//   - 'Confirm that charts for battery voltage, rssi, snr, and transmission delay load and display data'
//   - 'Confirm that those charts also load and display data when 1 week, 1 month and 3 month timeframes are selected'
    });
});


