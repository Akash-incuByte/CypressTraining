
class Homepage {
    // Elements
    elements={
        getUrl:()=>cy.get('a').contains('get')
    }

    clickGetUrl(){
        this.elements.getUrl().click()
    }

}

export const homepage = new Homepage();