describe("Appointments", () => {
  /**  common test commands  */
  beforeEach(() => {
    /** 0. changing the server state */
    cy.request("GET", "/api/debug/reset");

    /*1. Go to root of our vebserver*/
    cy.visit("/");

    /** 2. Find element containing text Tuesday */
    cy.contains("Monday");
  });

  // //1
  // it("should book an interview", () => {
  //   /** 3. Find Add button in the second appointment and click */
  //   cy.get("[alt=Add]").first().click();

  //   /** 4. Enters student name */
  //   cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");

  //   /** 5. Chooses an interviewer*/
  //   cy.get("[alt='Sylvia Palmer']").click();

  //   /** 6. Clicks the save button*/
  //   cy.contains("Save").click();

  //   /** 7.Sees the booked appointment */
  //   cy.contains(".appointment__card--show", "Sylvia Palmer");
  //   cy.contains(".appointment__card--show", "Lydia Miller-Jones");
  // });

  //2
  // it("should edit an interview", () => {
  //   /** 3. Find  hidden element and Clicks the edit button for the existing appointment*/
  //   cy.contains(".appointment__card--show", "Archie Cohen")
  //     .trigger("mouseover")
  //     .get("[alt='Edit']")
  //     .click({ force: true });

  //   /** 4. Clean the name and interviewer */
  //   cy.get("[data-testid=student-name-input]")
  //     .clear()
  //     .type("Lydia Miller-Jones");

  //   /** 5. Changes the name and interviewer */
  //   cy.get("[alt='Tori Malcolm']").click();

  //   /** 6. Clicks the save button*/
  //   cy.contains("Save").click();

  //   /** 7.Sees the booked appointment */
  //   cy.contains(".appointment__card--show", "Tori Malcolm");
  //   cy.contains(".appointment__card--show", "Lydia Miller-Jones");
  // });

  //3
  it("should cancel an interview", () => {
    /** 3. Find  hidden element and Clicks the edit button for the existing appointment*/
    cy.contains(".appointment__card--show", "Archie Cohen")
      .trigger("mouseover")
      .get("[alt='Delete']")
      .click({ force: true });

    /** 4. Clicks the confirm button */
    cy.contains("Confirm").click();

    /** 5. "Deleting" indicator should exist */
    cy.contains("Deliting").should("exist");

    /** .6 "Deleting" indicator should desappier */
    cy.contains("Deliting").should("not.exist");

    /** 7.Sees that the appointment slot is empty */
    cy.contains(".appointment__card--show", "Arcie Cohen").should("not.exist");
  });
});
