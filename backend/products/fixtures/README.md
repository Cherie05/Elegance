
# Loading Initial Data

This directory contains fixture files that provide sample data for the application.

## How to Load the Data

To load the initial data into your database, run the following command from the backend directory:

```bash
python manage.py loaddata products/fixtures/initial_data.json
```

## What's Included

The `initial_data.json` file contains:
- 4 product categories
- 8 sample products with full details

## Notes

- Make sure to run migrations before loading fixtures
- These fixtures use explicit primary keys, so loading them multiple times may cause conflicts
- Products reference categories by ID, so categories must be loaded first (handled automatically by loaddata)

## Creating Your Own Fixtures

To create fixtures from your existing database:

```bash
python manage.py dumpdata products.category products.product --indent 2 > products/fixtures/my_data.json
```
