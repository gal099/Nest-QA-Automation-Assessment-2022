Feature: Sort the list by most voted
    This feature sorts the list of the the platzi blog topic search

    Background: Navigates to the blog landing page
        Given A user is in the blog landing page

    Scenario: Sort the search list
        When The user searchs a blog topic
        And The user sorts the list by most voted
        Then The list should be sort by most voted
