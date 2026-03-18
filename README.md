# modern-eco-cart

This project is a React + Vite ecommerce storefront demo built with TypeScript, Tailwind CSS, shadcn/ui, and React Router.

## Run the frontend

```sh
npm install
npm run dev
```

## Optional backend

There is also a Django backend inside `backend/`.

```sh
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Notes

- The old scaffolding dependency and injected script have been removed.
- The frontend still defaults to mock catalog data in `src/services/api.ts`.
