*** Settings ***
Library    Browser

*** Variables ***
${URL}    http://localhost:3000

*** Keywords ***
Open Job Tracker
    New Browser    chromium    headless=False
    New Context
    New Page    ${URL}

Close Job Tracker
    Close Browser

Add Job
    [Arguments]    ${company}    ${position}
    Fill Text    input[name="company"]    ${company}
    Fill Text    input[name="position"]    ${position}
    Click    text=Add

*** Test Cases ***
User Can Add A New Job
    Open Job Tracker

    Add Job    Wolt    Frontend Intern

    Get Text    body    *=    Wolt
    Get Text    body    *=    Frontend Intern

    Close Job Tracker

User Can Search Jobs
    Open Job Tracker

    Fill Text    input[placeholder="Search by company or position"]    Microsoft

    Get Text    body    *=    Microsoft
    Get Text    body    *=    Software Engineer

    Close Job Tracker

User Can Edit Job Status
    Open Job Tracker

    Click    text=Edit >> nth=0
    Select Options By    select    value    offer
    Click    text=Save

    Get Text    body    *=    offer

    Close Job Tracker

User Can Delete Job
    Open Job Tracker

    Click    text=Delete >> nth=0
    Sleep    1s

    Close Job Tracker