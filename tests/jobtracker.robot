*** Settings ***
Library    Browser

*** Variables ***
${URL}    http://localhost:3000

*** Test Cases ***
User Can Add A New Job
    New Browser    chromium    headless=False
    New Context
    New Page    ${URL}

    Fill Text    input[name="company"]    Wolt
    Fill Text    input[name="position"]    Frontend Intern
    Click    text=Add

    Get Text    body    *=    Wolt
    Get Text    body    *=    Frontend Intern

    Close Browser