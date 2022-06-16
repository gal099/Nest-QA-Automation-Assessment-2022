Feature: Search a topic in the blog
    This feature search a topic in the blog

    Background: Navigates to the blog landing page
        Given A user is in the blog landing page

    Scenario: Blog topic search
        When The user searchs a blog topic
        Then A list of post should be displayed