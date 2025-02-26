import { faker } from "@faker-js/faker";
import { leadFormLocators } from "../locators/leadFormLocators";
import 'cypress-xpath';
import "cypress-downloadfile/lib/downloadFileCommand";



class LeadFormPage {

  clickApplyNow() {
    cy.get(leadFormLocators.applyNowButton)
      .should("be.visible")
      .click({force:true});
    cy.contains("p", "Please enter the following details").should("be.visible");
  }

  fillLeadForm() {
    const randomName = faker.person.fullName(); // Generate a random name
    const randomEmail = `simpliautomation${Math.floor(Math.random() * 1000)}@simplilearn.com`; // Custom email format
    const randomPhone = faker.string.numeric(10); // 10-digit phone number

    cy.get(leadFormLocators.nameInput).eq(0).type(randomName, { delay: 50 }); // Type random name
    cy.get(leadFormLocators.emailInput).eq(0).type(randomEmail, { delay: 50 }); // Type random email
    cy.get(leadFormLocators.phoneInput).eq(0).type(randomPhone, { delay: 50 }); // Type random phone number
    cy.get(leadFormLocators.experienceDropdown).select("3-5");
    cy.contains('button', leadFormLocators.submitButton).should('be.visible').invoke('click')
  }

  fillTalkToOurAdvisorForm() {
    const randomName = faker.person.fullName(); 
    const randomEmail = `simpliautomation${Math.floor(Math.random() * 1000)}@simplilearn.com`; 
    const randomPhone = faker.string.numeric(10); 

    cy.get(leadFormLocators.nameInput).eq(0).type(randomName, { delay: 50 }); 
    cy.get(leadFormLocators.emailInput).eq(0).type(randomEmail, { delay: 50 }); 
    cy.get(leadFormLocators.phoneInput).eq(0).type(randomPhone, { delay: 50 }); 
    cy.get(leadFormLocators.experienceDropdown).select("3-5");
    cy.get(leadFormLocators.talkToOurAdvisorsubmit).click()
  }

  fillRequestMoreInfoForm() {
    const randomName = faker.person.fullName(); 
    const randomEmail = `simpliautomation${Math.floor(Math.random() * 1000)}@simplilearn.com`; 
    const randomPhone = faker.string.numeric(10); 
    cy.get('[data-test="queryBox"]').invoke('attr', 'style', 'display: block');
    cy.wait(6000)


    cy.xpath('//h2[text()="Why Join this Program"]')
  .scrollIntoView({ ensureScrollable: false }) 
  .should('be.visible');

    cy.xpath(leadFormLocators.requestMoreInfoName).eq(0).scrollIntoView().should('be.visible').clear({ force: true }).type(randomName, { delay: 50 }); 
    cy.get(leadFormLocators.emailInput).eq(1).should('be.visible').clear({ force: true }).type(randomEmail, { delay: 50 }); 
    cy.get(leadFormLocators.phoneInput).eq(1 ).should('be.visible').clear({ force: true }).type(randomPhone, { delay: 50 }); 
    cy.xpath(leadFormLocators.requestMoreInfoExp).eq(0).scrollIntoView().should('be.visible').select("3-5");
    cy.xpath(leadFormLocators.requestMoreInfoSubmit).eq(0).scrollIntoView().should('be.visible').click()
    cy.get(leadFormLocators.requestMoreInfoSuccess).should('be.visible').and('contain', 'Thank you!')
  }

  // downloadsyllabus(){
  //   cy.get(leadFormLocators.downloadSyllabus1).eq(0).click()
  //   const randomName = faker.person.fullName(); // Generate a random name
  //   const randomEmail = `simpliautomation${Math.floor(Math.random() * 1000)}@simplilearn.com`; // Custom email format
  //   const randomPhone = faker.string.numeric(10); // 10-digit phone number

  //   cy.get(leadFormLocators.nameInput).eq(0).type(randomName, { delay: 50 }); // Type random name
  //   cy.get(leadFormLocators.emailInput).eq(0).type(randomEmail, { delay: 50 }); // Type random email
  //   cy.get(leadFormLocators.phoneInput).eq(0).type(randomPhone, { delay: 50 }); // Type random phone number
  //   cy.get(leadFormLocators.experienceDropdown).select("3-5");
  //   cy.intercept("GET", "**/*.pdf").as("pdfDownload");
  //   cy.xpath(leadFormLocators.downloadButton).should('be.visible').click({force:true})
  //   cy.wait(6000)



  //   cy.get('.download-btn img')
  // .should('be.visible')
  // .parent() // Navigate to the button
  // .invoke('attr', 'href') 
  // .then((pdfUrl) => {
  //   cy.log(`Downloading PDF from: ${pdfUrl}`);

  //   // Create a dynamic folder inside downloads based on the course URL
  //   const courseFolder = course.url.replace(/[^a-zA-Z0-9]/g, "_");
  //   cy.downloadFile(pdfUrl, `cypress/downloads`, "syllabus.pdf");
  // });

  // }
}

export default LeadFormPage;
