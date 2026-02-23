# Device Location

## Setup Guide
1. **Clone the repository**:
   ```bash
   git clone https://github.com/victorcaracas10-ship-it/Devicelocation.git
   cd Devicelocation
   ```

2. **Install dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) installed and then run:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

## API Documentation
### Endpoints
- **GET /api/location**: Retrieves the current device location.
- **POST /api/location**: Updates the device location.

### Request Format
- **POST /api/location**: 
   ```json
   {
     "latitude": "float",
     "longitude": "float"
   }
   ```

## Android Integration
1. **Add dependencies** to your `build.gradle`:
   ```groovy
   implementation 'com.example:devicelocation:1.0.0'
   ```

2. **Request permissions** in your `AndroidManifest.xml`:
   ```xml
   <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
   <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
   ```

3. **Initialize the library** in your `MainActivity`:
   ```java
   DeviceLocation.init(this);
   ```

## DigitalOcean Deployment
1. **Create a Droplet**:
   - Go to [DigitalOcean](https://www.digitalocean.com/) and create a droplet with Ubuntu.

2. **Connect to your Droplet**:
   ```bash
   ssh root@your_droplet_ip
   ```

3. **Clone your repository on the Droplet**:
   ```bash
   git clone https://github.com/victorcaracas10-ship-it/Devicelocation.git
   cd Devicelocation
   npm install
   npm start
   ```

4. **Set up a domain (optional)**:
   - Follow DigitalOcean's instructions to point a domain to your droplet.

---

Feel free to contribute to this documentation and add more details as necessary!