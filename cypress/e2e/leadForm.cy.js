import LeadFormPage from "../pages/LeadFormPage"; // Ensure correct case


describe("Lead Form Submission on Course Pages", () => {
  let courseURLs = [];

  before(() => {
    // Read URLs from CSV using Cypress task
    cy.task("readCSV").then((data) => {
      courseURLs = data;
    });
  });

  it("Should fill the form for 'Start application'", function () {
    courseURLs.forEach((course) => {
      if (course.url) {
        cy.visitCoursePage(course.url);
        const leadForm = new LeadFormPage();
        leadForm.clickApplyNow();
        leadForm.fillLeadForm(); 
        cy.visitCoursePage(course.url);
      }
    });
  });

  it("Should fill the form for 'Talk to our advisor'", function () {
    courseURLs.forEach((course) => {
      if (course.url) {
        cy.visitCoursePage(course.url);
        const leadForm = new LeadFormPage();
        leadForm.fillTalkToOurAdvisorForm();
        cy.visitCoursePage(course.url);
      }
    });
  });

  it("Should fill the form for 'Request more information'", function () {
    courseURLs.forEach((course) => {
      if (course.url) {
        cy.visitCoursePage(course.url);
        const leadForm = new LeadFormPage();
        leadForm.fillRequestMoreInfoForm();
        cy.visitCoursePage(course.url);
      }
    });
  });

  it.skip("Should download the syllabus", function () {
    courseURLs.forEach((course) => {
      if (course.url) {
        cy.visitCoursePage(course.url);
        const leadForm = new LeadFormPage();
        leadForm.downloadsyllabus(course.url)
      }
    });
  });
});