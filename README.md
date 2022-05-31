# React Calendar

## How to deploy

- Run to install all dependencies:

```bash
yarn install
```

- To run the app locally:

```bash
yarn start
```

- You can find the project running on `localhost:3000`.

## How to test

- Run tests with:

```bash
yarn test
```

## How to use the Calendar

The steps to add a reminder and editing it are:

1. click on the day you wish to add a reminder to

2. insert the information of the reminder as prompted

3. your reminder will appear as a _chip-like_ element on the day that you selected

4. to edit or remove the reminder, click on the reminder and you will have both options

## Caveats

### Folder structure

- I had a conflict here, I was not sure if I should have structured the project for the use case in question, or thinking about scalability. Decided to go with the latter, because of it, there are some folders which really didn't need to be here and are currently doing more harm than good in my opinion, but would come handy if the project were to grow.

### Weather on reminder details

- I had a hard time finding an API that has the behavior that I dreamed with on it's free tier (fetch with location string query and able to retrieve data from the future and past with no restritions on amout of days).

- Because of the above, I implemented the weather information on the Reminder Details, but it has a few restrictions in order for it work, which are:

  1. Date of reminder can't be before current (real-world) date.
  2. Date can't be after 7 days from current date.

- In the case of the restrictions above being violated, there will be a message explaining why there's no weather information. Apart from these two restrictions, there will also be a message if the location was not found.

- Requests to the API are not going to work over HTTPS, because of my free tier. It shouldn't be a problem in `localhost`.

### Test

- The test to the "add reminder" flow was added in a single file at `src/tests` and tests if the right user operations will result in a successful reminder creation.

## Flexible month / year

I began to implement it, but stopped because of the API limitations. I tried to clean it up but there might still be some residue of this logic.

## API key

It's hardcoded. I created a new dump account, therefore, security of the key is not an issue in this particular case and I chose to avoid the overhead of storing and accessing it with a secure approach.
