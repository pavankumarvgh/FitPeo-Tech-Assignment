describe('Assignment', () => {

  it('Navigate to the FitPeo Homepage', () => {

    cy.visit("https://www.fitpeo.com/")
    cy.contains("Home").should("be.visible") 
  })

  it('Navigate to the Revenue Calculator Page:', () => {
    cy.visit("https://www.fitpeo.com/")
    cy.contains("Home").should("be.visible")
    cy.get('div[class="satoshi MuiBox-root css-5ty6tm"]').eq(4).click()
    cy.contains('Revenue Calculator').should('be.visible');
  })

  it('Scroll Down to the Slider section', () => {
    cy.visit("https://www.fitpeo.com/")
    cy.contains("Home").should("be.visible")
    cy.get('div[class="satoshi MuiBox-root css-5ty6tm"]').eq(4).click()
    cy.get("a[href='/revenue-calculator']").scrollIntoView().should('be.visible');

  })


  
  it('should navigate to the FitPeo homepage', () => {
      
    cy.visit('https://www.fitpeo.com');  
     cy.contains('Revenue Calculator').click(); 
     cy.get("a[href='/revenue-calculator']").scrollIntoView().should('be.visible');
     cy.get('input[type="range"]')  
     .invoke('val', 820)
     .trigger('change',{ force: true });
     cy.get('input[type="number"]').clear().type('820').should('have.value', '820');

    })

it('Update the Text Field', () => {
  cy.visit("https://www.fitpeo.com/")
  cy.contains("Home").should("be.visible")
  cy.contains('Revenue Calculator').click()
  cy.get("a[href='/revenue-calculator']").scrollIntoView().should('be.visible');
  cy.get('input[type="number"]').clear().type('560');
 
})

it('Validate Slider Value', () => {
  cy.visit("https://www.fitpeo.com/")
  cy.contains("Home").should("be.visible")
  cy.contains('Revenue Calculator').click()
  cy.get('input[type="number"]').clear().type('560');
  cy.get('input[type="number"]').should('have.value', '560');
 })

it('Select CPT Codes:', () => {
  cy.visit("https://www.fitpeo.com/")
  cy.contains("Home").should("be.visible")
  cy.contains('Revenue Calculator').click()

  cy.contains('CPT-99091').scrollIntoView();
  cy.get('input[type="checkbox"]').eq(0).check()
  cy.get('input[type="checkbox"]').eq(0).should('be.checked')

  cy.contains("CPT-99453").should('be.visible')
  cy.get('input[type="checkbox"]').eq(1).check()
  cy.get('input[type="checkbox"]').eq(1).should('be.checked')

  cy.contains("CPT-99454").should('be.visible')
  cy.get('input[type="checkbox"]').eq(2).check()
  cy.get('input[type="checkbox"]').eq(2).should('be.checked')

  cy.contains("CPT-99474").should('be.visible')
  cy.get('input[type="checkbox"]').eq(7).check()
  cy.get('input[type="checkbox"]').eq(7).should('be.checked')

  cy.contains('$27000').should('be.visible')

})

})
