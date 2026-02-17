# Angular Micro Frontend Skeleton

This is a micro frontend skeleton using Angular 21.0.5 with Module Federation. The workspace contains:

- **Host Application** (Host): The main application with header, and side navigation
- **Sample Remote Application** (Remote): A micro frontend that loads dynamically when the MFE tab is clicked

## Project Structure

```
micro-frontend-workspace/
├── projects/
│   ├── host-app/          # Host application (port 4200)
│   └── remote-app/        # Sample remote micro frontend (port 4201)
├── angular.json
├── package.json
└── README.md
```

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Applications

### Option 1: Run Both Applications Simultaneously

To run both the Host and Remote applications at the same time:

```bash
npm run start:all
```

This will start:
- Host application on `http://localhost:4200`
- Remote application on `http://localhost:4201`

### Option 2: Run Applications Separately

**Terminal 1 - Start Remote Application:**
```bash
npm run start:remoteapp
```

**Terminal 2 - Start Host Application:**
```bash
npm run start:host
```

## Usage

1. Open your browser and navigate to `http://localhost:4200`
2. You will see the Host application with:
   - Header at the top
   - Side navigation bar on the left
3. Click on the **MFE** tab in the side navigation
4. The home micro frontend will be loaded dynamically and displayed in the main content area

## Architecture

### Host Application
- Port: 4200
- Contains the main layout (header, side navigation)
- Loads remote micro frontends using Module Federation
- Located in `projects/host-app/`

### Home Application (Remote)
- Port: 4201
- Exposed as a remote module via Module Federation
- Loaded dynamically when the Home route is accessed
- Located in `projects/remote-app/`

## Module Federation Configuration

The project uses `@angular-architects/module-federation` for micro frontend support:

- **Host webpack config**: `projects/host-app/webpack.config.js`
- **RemoteApps webpack config**: `projects/remote-app/webpack.config.js`

## Building

### Build Host Application
```bash
npm run build:host-app
```

### Build Remote Application
```bash
npm run build:remote-app
```

### Build Both
```bash
npm run build
```

## Technologies Used

- Angular 21.0.5
- Module Federation (@angular-architects/module-federation)
- TypeScript
- SCSS

## Project Structure Details

### Host Application Components
- `header/` - Application header component
- `side-nav/` - Side navigation component with routing links

## Troubleshooting

If you encounter issues:

1. **Port conflicts**: Make sure ports 4200 and 4201 are available
2. **Module Federation errors**: Ensure both applications are running before accessing routes
3. **CORS issues**: Both applications should be running on localhost during development

## Additional Resources

- [MFE Platform Technical Requirements](https://docs.google.com/document/d/1CburVVC77_uNRC9B1jdmcGN2wAggaRIlw2wWQ6wBQ7g/edit?tab=t.0#heading=h.tpqaagzb396s)
- [Module Federation High Level Design](https://docs.google.com/document/d/1uc8r0j2cnaAkVs686Qua5rsVRDE6uI6h690dW75NGhE/edit?tab=t.0#heading=h.9zwrz5s2kp0k)
- [Module Federation Technical Design Document](https://docs.google.com/document/d/1QeDQGWzVF-Q9fim9fPXwpeXagAAMpOwC_Ur6ZM7u-oY/edit?tab=t.0#heading=h.8i7asme6kkhv)
