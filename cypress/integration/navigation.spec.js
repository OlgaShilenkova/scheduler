describe("Navigation", () => {
  //1
  it("should visit root", () => {
    cy.visit("/");
  });

  //2
  it("should navigate to Tuesday", () => {
    /*1. Go to root of our vebserver*/
    cy.visit("/");

    /*2. Find element containing text Tuesday  and click on it*/
    cy.contains("Tuesday").click();
  });

  //3
  it("should navigate to Tuesday using li", () => {
    /*1. Go to root of our vebserver*/
    cy.visit("/");

    /*2. Find li element that has text Tuesday and click on it*/
    cy.get("li").contains("Tuesday").click();
  });

  //4
  it("should confirm that Tuesday was selected using scc property", () => {
    /*1. Go to root of our vebserver*/
    cy.visit("/");

    /*2. Target the list item element that contains "Tuesday"*/
    cy.get("li")
      .contains("li", "Tuesday")

      /*3. Confirm that the rigth item is selected*/
      .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
  });

  //5
  it("should navigate to Tuesday and confirm the rigth selection ", () => {
    /*1. Go to root of our vebserver*/
    cy.visit("/");

    /*2. Finds the list item, clicks it and checks it for the correct background colour*/
    cy.contains("li", "Tuesday")
      .click()
      .should("have.css", "background-color", "rgb(242, 242, 242)");
  });

  //5
  it("should navigate to Tuesday using special id and confirm the rigth selection  by class", () => {
    /*1. Go to root of our vebserver*/
    cy.visit("/");

    /*2. Finds the list item, clicks it and checks it for the correct background colour*/
    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected");
  });
});
