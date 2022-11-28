# Next.js Tutorial #12 - Dynamic Routes (part 2 - getStaticPaths)

ultimately when we build our app for production, next needs to be able to generate a route and an html page for each of these ninjas. for example, in our case it should create 10 html pages for each of our 10 ninjas.

and -- assign each one to a specific route based on its id but next doesn't automatically know what routes and html pages to generate because that depends on external data.
for example if i was to build this app, it wouldn't automatically know to create 10 routes and 10 html pages for our ninja detail pages and that's because it doesn't know what's in our data when it's building the application that's being stored somewhere else on the internet.

and -- it's only after we fetch the data that we have a list of 10 ninjas. so -- we need a way to explicitly tell next what ninja details routes and pages we need to create at build time based on our data.

to do this we use a function `getStaticPaths`.

## getStaticPaths

function that's going to run at build time and inside it we return all the possible values for our route parameter the id for this component.

need to export this function.
export const and then the function is called getStaticPaths equal to an asynchronous function and the reason this function is asynchronous is because we have to fetch all of the data in this function so that we can get all of the ids and we can return those ids to next and then based on those, it can generate all the routes and pages for us so we need that external data.

so -- next knows how many pages and routes to generate.

### fetch data

first, is fetch that data so -- const response is equal to await and then we'll use a fetch request and then this is going to be to the same end point because we just fetching the same data.

