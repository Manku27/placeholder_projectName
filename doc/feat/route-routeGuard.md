# 1 . GOAL

- Every user must be able to see the landing page of the website.
- Everyone can access the login route where two category of people can log in :
  a . Contributor
  b . Admin
- The general user cannot access routes protected for logged in members.
- Contributor cannot access routes protected for admin.

# 2 . WORK FLOW

- mention the route - endpoint,name,component,authority of access to different types of users, the kind of route : auth,unauth, general
- routeguard handles 'who can access what' based on he roles mentioned on the route
- on routing to home '/', different types of users will be directed to different pages which serve as their homes.

- children routes are handled differently, will be added when need arises.
