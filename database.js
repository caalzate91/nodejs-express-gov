var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite" 


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE Opportunity (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            number text,
            title text, 
            agency text, 
            status text, 
            posted Date,
            close Date
            )`,(err) => {
        if (err) {
            // Table already created
            console.log('Database created previosly.')
        }else{
            // Table just created, creating some rows
            var insert = 'INSERT INTO Opportunity (number, title, agency, status, posted, close) VALUES (?,?,?,?,?,?)'
            db.run(insert, ["NPS-20-REG1-0004", "Philadelphia ProRanger Program", "DOI-NPS", "Posted", "05/24/2020", "06/03/2020"])
            db.run(insert, ["SFJ60020GR009", "Economic Recovery Grant", "DOS-FJI", "Posted", "05/22/2020", "06/30/2020"])
            db.run(insert, ["ED-GRANTS-052220-002", "Office of Elementary and Secondary Education (OESE): Expanding Opportunity Through Quality Charter Schools Program (CSP): Grants to Charter School Developers for the Replication and expansion of High-Quality Charter Schools CFDA Number 84.282E", "ED", "Posted", "05/22/2020", "06/19/2020"])
            db.run(insert, ["ED-GRANTS-052220-001", "Office of Elementary and Secondary Education (OESE): Expanding Opportunity Through Quality Charter Schools Program (CSP): Grants to Charter School Developers for the Opening of New Charter Schools CFDA Number 84.282B", "ED", "Posted", "05/22/2020", "07/14/2020"])
            db.run(insert, ["20CS16", "Advancing Community Supervision Strategies Microsite Development", "USDOJ-BOP-NIC", "Posted", "05/22/2020", "07/21/2020"])
            db.run(insert, ["PAS-JAKARTA-FY20-04", "U.S. Ambassadors Fund for Cultural Preservation (AFCP) 2021 Small Grant Competition", "DOS-IDN", "Forecasted", "05/22/2020", ""])
            db.run(insert, ["PAS-JAKARTA-FY20-03", "U.S. Ambassadors Fund for Cultural Preservation (AFCP)", "DOS-IDN", "Forecasted", "05/22/2020", "-"])
            db.run(insert, ["P20AS00072", "Recover Condors by Sharing GPS Data at Pinnacles National Park", "DOI-NPS", "Posted", "05/22/2020", ""])
            db.run(insert, ["BOR-DO-20-N005", "Evaluating Contaminates of Emerging Concern’s Fate in Potable Reuse Membrane Treatment", "DOI-BOR", "Posted", "05/22/2020", "06/05/2020"])
            db.run(insert, ["DHS-20-ST-061-COE-EXT001", "Centers for Homeland Security - Extension of Period of Performance", "DHS-OPO", "Posted", "05/22/2020", "05/29/2020"])
            db.run(insert, ["DHS-20-061-COE-SUPP", "DHS S&T COE Supplemental Application", "DHS-OPO", "Posted", "05/22/2020", "05/29/2020"])
            db.run(insert, ["SFOP0006965", "Women’s Empowerment Through Economic Inclusion", "DOS-SA", "Posted", "05/22/2020", "06/28/2020"])
            db.run(insert, ["NOAA-NOS-IOOS-2021-2006475", "FY 2021 Implementation of the U.S. Integrated Ocean Observing System (IOOS®)", "DOC", "Posted", "05/22/2020", "12/31/2020"])
            db.run(insert, ["USDA-NRCS-MT-CIG-20-NOFO0001024", "Announcement for Program Funding for NRCS’ Conservation Innovation Grants (CIG) for Federal Fiscal Year (FY) 2020 – Montana", "USDA-NRCS", "Posted", "05/22/2020", "06/22/2020"])
            db.run(insert, ["20CS17", "Evidence Based Decision Making in State and Local Jurisdictions: Initiative Review", "USDOJ-BOP-NIC", "Posted", "05/22/2020", "07/06/2020"])
            db.run(insert, ["SFOP0006412", "Support to American-Style Higher Education in Iraq", "DOS-NEA-AC", "Posted", "05/22/2020", "06/22/2020"])
            db.run(insert, ["SFOP0006851", "Combatting COVID-19 Pandemic and Proliferation Threats", "DOS-ISN", "Posted", "05/21/2020", "05/29/2020"])
            db.run(insert, ["RFA-RM-20-020", "NIH Directors Emergency Transformative Research Awards (R01 Clinical Trial Optional)", "HHS-NIH11", "Posted", "05/21/2020", "09/30/2020"])
            db.run(insert, ["RFA-RM-20-014", "NIH Directors Early Independence Awards (DP5 Clinical Trial Optional)", "HHS-NIH11", "Posted", "05/21/2020", "09/04/2020"])
            db.run(insert, ["RFA-RM-20-013", "NIH Directors Transformative Research Awards (R01 Clinical Trial Optional)", "HHS-NIH11", "Posted", "05/21/2020", "09/30/2020"])
            db.run(insert, ["RFA-RM-20-021", "	NIH Directors Emergency Early Independence Awards (DP5 Clinical Trial Optional)", "HHS-NIH11", "Posted", "05/21/2020", "09/04/2020"])
            db.run(insert, ["20CS18", "New Mexico Pretrial Implementation Support", "USDOJ-BOP-NIC", "Posted", "05/21/2020", "07/15/2020"])
            db.run(insert, ["20-578", "NSF-DFG Lead Agency Activity in Electrosynthesis and Electrocatalysis", "NSF", "Posted", "05/17/2020", "09/30/2020"])
            db.run(insert, ["20CS12", "VICTOR Curriculum Revision and E-Course Development", "USDOJ-BOP-NIC", "Posted", "05/15/2020", "07/14/2020"])
            console.log('Database created.')
        }
    })  
    }
})


module.exports = db