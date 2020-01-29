/* eslint-disable no-undef */
// / <reference types="Cypress" />

// 設定 baseUrl，如沒有%CI_URL%，則為cypress.json中的設定：www.junyiacademy.org
let baseUrl = Cypress.env('CI_URL') || Cypress.config().baseUrl;
if (!baseUrl.endsWith('/')) {
    baseUrl += '/';
}

// 判斷是不是要測 local server
const isLocal = baseUrl.indexOf('localhost') !== -1;

context('首頁', () => {
    beforeEach(() => {
        cy.viewport(1280, 800);
        // 有時候第一次連到live/test server會比較久
        cy.visit(baseUrl, { timeout: 120000 });
        // cy.screenshot();
        cy.matchImageSnapshot('首頁錯誤');
    });

    it('使用者名單確認', () => {
        cy.wait(1000);
        cy.get('#inputGroupSelect01')
            .children()
            .should('have.length', 5);
        // cy.mySnapshotCommand();
        // setTimeout(() => {
        // }, 1000);

        // courses.forEach((subject, index) => {
        //     // 一個一個比對課程內容
        //     cy.get('#topic-browser-menu')
        //         .children().eq(0)
        //         .children().eq(index)
        //         .children().eq(0).should('have.text', subject);
        // });

        // cy.get('#topic-browser-menu').matchImageSnapshot('課程目錄');
    });
});
