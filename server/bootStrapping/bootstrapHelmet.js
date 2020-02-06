import helmet from 'helmet';

export default function bootstrapHelmet(app) {
  app.use(helmet());
  app.disable('x-powered-by');

  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'"],
      fontSrc: ["'self'"],
      imgSrc: ["'self'"],
      scriptSrc: ["'self'"],
    },
  }));

  app.use(helmet.featurePolicy({
    features: {
      fullscreen: ["'self'"],
      accelerometer: ["'none'"],
      ambientLightSensor: ["'none'"],
      autoplay: ["'none'"],
      camera: ["'none'"],
      documentDomain: ["'none'"],
      documentWrite: ["'none'"],
      encryptedMedia: ["'none'"],
      fontDisplayLateSwap: ["'none'"],
      geolocation: ["'none'"],
      gyroscope: ["'none'"],
      layoutAnimations: ["'none'"],
      legacyImageFormats: ["'none'"],
      loadingFrameDefaultEager: ["'none'"],
      magnetometer: ["'none'"],
      microphone: ["'none'"],
      midi: ["'none'"],
      oversizedImages: ["'none'"],
      payment: ["'none'"],
      pictureInPicture: ["'none'"],
      serial: ["'none'"],
      speaker: ["'none'"],
      syncScript: ["'none'"],
      syncXhr: ["'none'"],
      unoptimizedImages: ["'none'"],
      unoptimizedLosslessImages: ["'none'"],
      unoptimizedLossyImages: ["'none'"],
      unsizedMedia: ["'none'"],
      usb: ["'none'"],
      verticalScroll: ["'none'"],
      vibrate: ["'none'"],
      vr: ["'none'"],
      wakeLock: ["'none'"],
      xr: ["'self'"],
    },
  }));
}
