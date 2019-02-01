module.exports = {
  AIRGoogleMapCalloutManager: {},
  AIRGoogleMapCircleManager: {},
  AIRGoogleMapManager: {
    legalNotice: { type: 'string' },
    animateToBearing: { type: 'function', functionType: 'async' },
    animateToCoordinate: { type: 'function', functionType: 'async' },
    animateToNavigation: { type: 'function', functionType: 'async' },
    animateToRegion: { type: 'function', functionType: 'async' },
    animateToViewingAngle: { type: 'function', functionType: 'async' },
    coordinateForPoint: { type: 'function', functionType: 'promise' },
    fitToCoordinates: { type: 'function', functionType: 'async' },
    fitToElements: { type: 'function', functionType: 'async' },
    fitToSuppliedMarkers: { type: 'function', functionType: 'async' },
    pointForCoordinate: { type: 'function', functionType: 'promise' },
    setIndoorActiveLevelIndex: { type: 'function', functionType: 'async' },
    setMapBoundaries: { type: 'function', functionType: 'async' },
    takeSnapshot: { type: 'function', functionType: 'async' },
  },
  AIRGoogleMapMarkerManager: {
    hideCallout: { type: 'function', functionType: 'async' },
    redraw: { type: 'function', functionType: 'async' },
    showCallout: { type: 'function', functionType: 'async' },
  },
  AIRGoogleMapOverlayManager: {},
  AIRGoogleMapPolygonManager: {},
  AIRGoogleMapPolylineManager: {},
  AIRGoogleMapUrlTileManager: {},
  AIRMapCalloutManager: {},
  AIRMapCircleManager: {},
  AIRMapLocalTileManager: {},
  AIRMapManager: {
    animateToBearing: { type: 'function', functionType: 'async' },
    animateToCoordinate: { type: 'function', functionType: 'async' },
    animateToNavigation: { type: 'function', functionType: 'async' },
    animateToRegion: { type: 'function', functionType: 'async' },
    animateToViewingAngle: { type: 'function', functionType: 'async' },
    coordinateForPoint: { type: 'function', functionType: 'promise' },
    fitToCoordinates: { type: 'function', functionType: 'async' },
    fitToElements: { type: 'function', functionType: 'async' },
    fitToSuppliedMarkers: { type: 'function', functionType: 'async' },
    pointForCoordinate: { type: 'function', functionType: 'promise' },
    takeSnapshot: { type: 'function', functionType: 'async' },
  },
  AIRMapMarkerManager: {
    hideCallout: { type: 'function', functionType: 'async' },
    showCallout: { type: 'function', functionType: 'async' },
  },
  AIRMapOverlayManager: {},
  AIRMapPolygonManager: {},
  AIRMapPolylineManager: {},
  AIRMapUrlTileManager: {},
  ExpoBrightness: {
    getBrightnessAsync: { type: 'function', functionType: 'promise' },
    getSystemBrightnessAsync: { type: 'function', functionType: 'promise' },
    getSystemBrightnessModeAsync: { type: 'function', functionType: 'promise' },
    isUsingSystemBrightnessAsync: { type: 'function', functionType: 'promise' },
    setBrightnessAsync: { type: 'function', functionType: 'promise' },
    setSystemBrightnessAsync: { type: 'function', functionType: 'promise' },
    setSystemBrightnessModeAsync: { type: 'function', functionType: 'promise' },
    useSystemBrightnessAsync: { type: 'function', functionType: 'promise' },
  },
  ExpoNativeModuleIntrospection: {
    getNativeModuleNamesAsync: { type: 'function', functionType: 'promise' },
    introspectNativeModuleAsync: { type: 'function', functionType: 'promise' },
  },
  ExpoNativeModuleProxy: {
    exportedMethods: {
      type: 'object',
      mock: {
        AdIconViewManager: [],
        BlurViewManager: [{ key: 0, argumentsCount: 2, name: 'updateProps' }],
        CTKAdSettingsManager: [
          { key: 0, argumentsCount: 1, name: 'addTestDevice' },
          { key: 1, argumentsCount: 1, name: 'setIsChildDirected' },
          { key: 2, argumentsCount: 1, name: 'setMeditationService' },
          { key: 3, argumentsCount: 1, name: 'setUrlPrefix' },
          { key: 4, argumentsCount: 1, name: 'setLogLevel' },
          { key: 5, argumentsCount: 0, name: 'clearTestDevices' },
        ],
        CTKBannerViewManager: [],
        CTKInterstitialAdManager: [{ key: 0, argumentsCount: 1, name: 'showAd' }],
        CTKNativeAdManager: [
          { key: 0, argumentsCount: 1, name: 'disableAutoRefresh' },
          { key: 1, argumentsCount: 2, name: 'setMediaCachePolicy' },
          { key: 2, argumentsCount: 4, name: 'registerViewsForInteraction' },
          { key: 3, argumentsCount: 2, name: 'init' },
        ],
        EXLinearGradientManager: [],
        ExpoAdsAdMobBannerView: [],
        ExpoAdsAdMobInterstitialManager: [
          { key: 0, argumentsCount: 1, name: 'setTestDeviceID' },
          { key: 1, argumentsCount: 0, name: 'requestAd' },
          { key: 2, argumentsCount: 0, name: 'showAd' },
          { key: 3, argumentsCount: 0, name: 'dismissAd' },
          { key: 4, argumentsCount: 1, name: 'setAdUnitID' },
          { key: 5, argumentsCount: 0, name: 'getIsReady' },
        ],
        ExpoAdsAdMobRewardedVideoAdManager: [
          { key: 0, argumentsCount: 1, name: 'setTestDeviceID' },
          { key: 1, argumentsCount: 0, name: 'requestAd' },
          { key: 2, argumentsCount: 0, name: 'showAd' },
          { key: 3, argumentsCount: 0, name: 'dismissAd' },
          { key: 4, argumentsCount: 1, name: 'setAdUnitID' },
          { key: 5, argumentsCount: 0, name: 'getIsReady' },
        ],
        ExpoAmplitude: [
          { key: 0, argumentsCount: 1, name: 'setUserId' },
          { key: 1, argumentsCount: 1, name: 'logEvent' },
          { key: 2, argumentsCount: 2, name: 'logEventWithProperties' },
          { key: 3, argumentsCount: 1, name: 'initialize' },
          { key: 4, argumentsCount: 1, name: 'setUserProperties' },
          { key: 5, argumentsCount: 2, name: 'setGroup' },
          { key: 6, argumentsCount: 0, name: 'clearUserProperties' },
        ],
        ExpoAppAuth: [{ key: 0, argumentsCount: 1, name: 'executeAsync' }],
        ExpoBackgroundFetch: [
          { key: 0, argumentsCount: 1, name: 'unregisterTaskAsync' },
          { key: 1, argumentsCount: 1, name: 'setMinimumIntervalAsync' },
          { key: 2, argumentsCount: 0, name: 'getStatusAsync' },
          { key: 3, argumentsCount: 2, name: 'registerTaskAsync' },
        ],
        ExpoBarCodeScannerModule: [{ key: 0, argumentsCount: 2, name: 'scanFromURLAsync' }],
        ExpoBarCodeScannerView: [],
        ExpoBarometer: [
          { key: 0, argumentsCount: 0, name: 'isAvailableAsync' },
          { key: 1, argumentsCount: 1, name: 'setUpdateInterval' },
        ],
        ExpoContacts: [
          { key: 0, argumentsCount: 0, name: 'getDefaultContainerIdentifierAsync' },
          { key: 1, argumentsCount: 2, name: 'addExistingGroupToContainerAsync' },
          { key: 2, argumentsCount: 2, name: 'createGroupAsync' },
          { key: 3, argumentsCount: 2, name: 'addContactAsync' },
          { key: 4, argumentsCount: 1, name: 'removeGroupAsync' },
          { key: 5, argumentsCount: 2, name: 'removeContactFromGroupAsync' },
          { key: 6, argumentsCount: 1, name: 'removeContactAsync' },
          { key: 7, argumentsCount: 1, name: 'updateContactAsync' },
          { key: 8, argumentsCount: 1, name: 'getGroupsAsync' },
          { key: 9, argumentsCount: 2, name: 'addExistingContactToGroupAsync' },
          { key: 10, argumentsCount: 1, name: 'getContainersAsync' },
          { key: 11, argumentsCount: 2, name: 'updateGroupNameAsync' },
          { key: 12, argumentsCount: 1, name: 'getContactsAsync' },
          { key: 13, argumentsCount: 3, name: 'presentFormAsync' },
          { key: 14, argumentsCount: 1, name: 'writeContactToFileAsync' },
          { key: 15, argumentsCount: 0, name: 'dismissFormAsync' },
        ],
        ExpoDocumentPicker: [{ key: 0, argumentsCount: 1, name: 'getDocumentAsync' }],
        ExpoFaceDetector: [{ key: 0, argumentsCount: 1, name: 'detectFaces' }],
        ExpoFontLoader: [{ key: 0, argumentsCount: 2, name: 'loadAsync' }],
        ExpoGoogleSignIn: [
          { key: 0, argumentsCount: 1, name: 'getTokensAsync' },
          { key: 1, argumentsCount: 1, name: 'getPhotoAsync' },
          { key: 2, argumentsCount: 0, name: 'getCurrentUserAsync' },
          { key: 3, argumentsCount: 0, name: 'disconnectAsync' },
          { key: 4, argumentsCount: 0, name: 'signOutAsync' },
          { key: 5, argumentsCount: 1, name: 'initAsync' },
          { key: 6, argumentsCount: 0, name: 'signInAsync' },
          { key: 7, argumentsCount: 0, name: 'signInSilentlyAsync' },
          { key: 8, argumentsCount: 0, name: 'isConnectedAsync' },
        ],
        ExpoKeepAwake: [
          { key: 0, argumentsCount: 0, name: 'activate' },
          { key: 1, argumentsCount: 0, name: 'deactivate' },
        ],
        ExpoLocalAuthentication: [
          { key: 0, argumentsCount: 0, name: 'supportedAuthenticationTypesAsync' },
          { key: 1, argumentsCount: 1, name: 'authenticateAsync' },
          { key: 2, argumentsCount: 0, name: 'hasHardwareAsync' },
          { key: 3, argumentsCount: 0, name: 'isEnrolledAsync' },
        ],
        ExpoLocalization: [{ key: 0, argumentsCount: 0, name: 'getLocalizationAsync' }],
        ExpoLocation: [
          { key: 0, argumentsCount: 2, name: 'startLocationUpdatesAsync' },
          { key: 1, argumentsCount: 1, name: 'hasStartedLocationUpdatesAsync' },
          { key: 2, argumentsCount: 0, name: 'getProviderStatusAsync' },
          { key: 3, argumentsCount: 1, name: 'removeWatchAsync' },
          { key: 4, argumentsCount: 0, name: 'hasServicesEnabledAsync' },
          { key: 5, argumentsCount: 1, name: 'geocodeAsync' },
          { key: 6, argumentsCount: 2, name: 'startGeofencingAsync' },
          { key: 7, argumentsCount: 1, name: 'getCurrentPositionAsync' },
          { key: 8, argumentsCount: 0, name: 'requestPermissionsAsync' },
          { key: 9, argumentsCount: 1, name: 'stopGeofencingAsync' },
          { key: 10, argumentsCount: 1, name: 'stopLocationUpdatesAsync' },
          { key: 11, argumentsCount: 1, name: 'hasStartedGeofencingAsync' },
          { key: 12, argumentsCount: 1, name: 'reverseGeocodeAsync' },
          { key: 13, argumentsCount: 1, name: 'watchDeviceHeading' },
          { key: 14, argumentsCount: 2, name: 'watchPositionImplAsync' },
        ],
        ExpoMailComposer: [{ key: 0, argumentsCount: 1, name: 'composeAsync' }],
        ExpoPermissions: [
          { key: 0, argumentsCount: 1, name: 'getAsync' },
          { key: 1, argumentsCount: 1, name: 'askAsync' },
        ],
        ExpoPublisherBannerView: [],
        ExpoSMS: [
          { key: 0, argumentsCount: 0, name: 'isAvailableAsync' },
          { key: 1, argumentsCount: 2, name: 'sendSMSAsync' },
        ],
        ExpoSecureStore: [
          { key: 0, argumentsCount: 2, name: 'getValueWithKeyAsync' },
          { key: 1, argumentsCount: 2, name: 'deleteValueWithKeyAsync' },
          { key: 2, argumentsCount: 3, name: 'setValueWithKeyAsync' },
        ],
        ExpoTaskManager: [
          { key: 0, argumentsCount: 1, name: 'isTaskRegisteredAsync' },
          { key: 1, argumentsCount: 1, name: 'unregisterTaskAsync' },
          { key: 2, argumentsCount: 0, name: 'unregisterAllTasksAsync' },
          { key: 3, argumentsCount: 0, name: 'getRegisteredTasksAsync' },
          { key: 4, argumentsCount: 1, name: 'getTaskOptionsAsync' },
          { key: 5, argumentsCount: 2, name: 'notifyTaskFinishedAsync' },
        ],
        ExpoVideoManager: [{ key: 0, argumentsCount: 2, name: 'setFullscreen' }],
        ExpoWebBrowser: [
          { key: 0, argumentsCount: 0, name: 'dismissBrowser' },
          { key: 1, argumentsCount: 1, name: 'openBrowserAsync' },
          { key: 2, argumentsCount: 0, name: 'dismissAuthSession' },
          { key: 3, argumentsCount: 2, name: 'openAuthSessionAsync' },
        ],
        ExponentAV: [
          { key: 0, argumentsCount: 1, name: 'prepareAudioRecorder' },
          { key: 1, argumentsCount: 0, name: 'getAudioRecordingStatus' },
          { key: 2, argumentsCount: 2, name: 'replaySound' },
          { key: 3, argumentsCount: 1, name: 'unloadForSound' },
          { key: 4, argumentsCount: 1, name: 'unloadForVideo' },
          { key: 5, argumentsCount: 3, name: 'loadForVideo' },
          { key: 6, argumentsCount: 2, name: 'setStatusForVideo' },
          { key: 7, argumentsCount: 1, name: 'getStatusForVideo' },
          { key: 8, argumentsCount: 1, name: 'getStatusForSound' },
          { key: 9, argumentsCount: 1, name: 'setAudioMode' },
          { key: 10, argumentsCount: 2, name: 'setStatusForSound' },
          { key: 11, argumentsCount: 1, name: 'setAudioIsEnabled' },
          { key: 12, argumentsCount: 0, name: 'startAudioRecording' },
          { key: 13, argumentsCount: 2, name: 'loadForSound' },
          { key: 14, argumentsCount: 2, name: 'replayVideo' },
          { key: 15, argumentsCount: 0, name: 'pauseAudioRecording' },
          { key: 16, argumentsCount: 0, name: 'stopAudioRecording' },
          { key: 17, argumentsCount: 0, name: 'unloadAudioRecorder' },
        ],
        ExponentAccelerometer: [
          { key: 0, argumentsCount: 0, name: 'isAvailableAsync' },
          { key: 1, argumentsCount: 1, name: 'setUpdateInterval' },
        ],
        ExponentCameraManager: [
          { key: 0, argumentsCount: 1, name: 'stopRecording' },
          { key: 1, argumentsCount: 2, name: 'getAvailablePictureSizes' },
          { key: 2, argumentsCount: 2, name: 'takePicture' },
          { key: 3, argumentsCount: 1, name: 'pausePreview' },
          { key: 4, argumentsCount: 2, name: 'record' },
          { key: 5, argumentsCount: 1, name: 'resumePreview' },
        ],
        ExponentConstants: [{ key: 0, argumentsCount: 0, name: 'getWebViewUserAgentAsync' }],
        ExponentDeviceMotion: [
          { key: 0, argumentsCount: 0, name: 'isAvailableAsync' },
          { key: 1, argumentsCount: 1, name: 'setUpdateInterval' },
        ],
        ExponentFacebook: [{ key: 0, argumentsCount: 2, name: 'logInWithReadPermissionsAsync' }],
        ExponentFileSystem: [
          { key: 0, argumentsCount: 5, name: 'downloadResumableStartAsync' },
          { key: 1, argumentsCount: 1, name: 'downloadResumablePauseAsync' },
          { key: 2, argumentsCount: 2, name: 'readAsStringAsync' },
          { key: 3, argumentsCount: 3, name: 'writeAsStringAsync' },
          { key: 4, argumentsCount: 2, name: 'makeDirectoryAsync' },
          { key: 5, argumentsCount: 2, name: 'getInfoAsync' },
          { key: 6, argumentsCount: 2, name: 'deleteAsync' },
          { key: 7, argumentsCount: 1, name: 'copyAsync' },
          { key: 8, argumentsCount: 2, name: 'readDirectoryAsync' },
          { key: 9, argumentsCount: 3, name: 'downloadAsync' },
          { key: 10, argumentsCount: 1, name: 'moveAsync' },
        ],
        ExponentGLObjectManager: [
          { key: 0, argumentsCount: 0, name: 'createContextAsync' },
          { key: 1, argumentsCount: 1, name: 'destroyContextAsync' },
          { key: 2, argumentsCount: 1, name: 'destroyObjectAsync' },
          { key: 3, argumentsCount: 2, name: 'createCameraTextureAsync' },
          { key: 4, argumentsCount: 2, name: 'takeSnapshotAsync' },
        ],
        ExponentGLViewManager: [],
        ExponentGyroscope: [
          { key: 0, argumentsCount: 0, name: 'isAvailableAsync' },
          { key: 1, argumentsCount: 1, name: 'setUpdateInterval' },
        ],
        ExponentImagePicker: [
          { key: 0, argumentsCount: 1, name: 'launchCameraAsync' },
          { key: 1, argumentsCount: 1, name: 'launchImageLibraryAsync' },
        ],
        ExponentMagnetometer: [
          { key: 0, argumentsCount: 0, name: 'isAvailableAsync' },
          { key: 1, argumentsCount: 1, name: 'setUpdateInterval' },
        ],
        ExponentMagnetometerUncalibrated: [
          { key: 0, argumentsCount: 0, name: 'isAvailableAsync' },
          { key: 1, argumentsCount: 1, name: 'setUpdateInterval' },
        ],
        ExponentMediaLibrary: [
          { key: 0, argumentsCount: 1, name: 'getAlbumAsync' },
          { key: 1, argumentsCount: 1, name: 'createAssetAsync' },
          { key: 2, argumentsCount: 0, name: 'getAlbumsAsync' },
          { key: 3, argumentsCount: 1, name: 'deleteAssetsAsync' },
          { key: 4, argumentsCount: 2, name: 'addAssetsToAlbumAsync' },
          { key: 5, argumentsCount: 0, name: 'getMomentsAsync' },
          { key: 6, argumentsCount: 1, name: 'getAssetInfoAsync' },
          { key: 7, argumentsCount: 2, name: 'deleteAlbumsAsync' },
          { key: 8, argumentsCount: 2, name: 'removeAssetsFromAlbumAsync' },
          { key: 9, argumentsCount: 2, name: 'createAlbumAsync' },
          { key: 10, argumentsCount: 1, name: 'getAssetsAsync' },
        ],
        ExponentPedometer: [
          { key: 0, argumentsCount: 2, name: 'getStepCountAsync' },
          { key: 1, argumentsCount: 0, name: 'isAvailableAsync' },
        ],
        ExponentPrint: [
          { key: 0, argumentsCount: 1, name: 'print' },
          { key: 1, argumentsCount: 0, name: 'selectPrinter' },
          { key: 2, argumentsCount: 1, name: 'printToFileAsync' },
        ],
        ExponentSQLite: [
          { key: 0, argumentsCount: 1, name: 'close' },
          { key: 1, argumentsCount: 3, name: 'exec' },
        ],
        ExponentSegment: [
          { key: 0, argumentsCount: 0, name: 'flush' },
          { key: 1, argumentsCount: 2, name: 'screenWithProperties' },
          { key: 2, argumentsCount: 1, name: 'setEnabledAsync' },
          { key: 3, argumentsCount: 1, name: 'screen' },
          { key: 4, argumentsCount: 1, name: 'identify' },
          { key: 5, argumentsCount: 2, name: 'identifyWithTraits' },
          { key: 6, argumentsCount: 1, name: 'initializeAndroid' },
          { key: 7, argumentsCount: 2, name: 'trackWithProperties' },
          { key: 8, argumentsCount: 1, name: 'initializeIOS' },
          { key: 9, argumentsCount: 2, name: 'groupWithTraits' },
          { key: 10, argumentsCount: 2, name: 'alias' },
          { key: 11, argumentsCount: 1, name: 'group' },
          { key: 12, argumentsCount: 1, name: 'track' },
          { key: 13, argumentsCount: 0, name: 'getEnabledAsync' },
          { key: 14, argumentsCount: 0, name: 'reset' },
        ],
        ExponentSpeech: [
          { key: 0, argumentsCount: 3, name: 'speak' },
          { key: 1, argumentsCount: 0, name: 'stop' },
          { key: 2, argumentsCount: 0, name: 'pause' },
          { key: 3, argumentsCount: 0, name: 'resume' },
          { key: 4, argumentsCount: 0, name: 'isSpeaking' },
        ],
        MediaViewManager: [],
        VibrancyViewManager: [{ key: 0, argumentsCount: 2, name: 'updateProps' }],
      },
    },
    modulesConstants: {
      type: 'mock',
      mockDefinition: {
        CTKAdSettingsManager: {
          addListener: { type: 'function' },
          addTestDevice: { type: 'function' },
          clearTestDevices: { type: 'function' },
          currentDeviceHash: { type: 'string' },
          removeListeners: { type: 'function' },
          setIsChildDirected: { type: 'function' },
          setLogLevel: { type: 'function' },
          setMeditationService: { type: 'function' },
          setUrlPrefix: { type: 'function' },
        },
        ExpoAppAuth: {
          OAuthRedirect: { type: 'array' },
          URLSchemes: { type: 'array' },
          addListener: { type: 'function' },
          executeAsync: { type: 'function' },
          removeListeners: { type: 'function' },
        },
        ExpoBarCodeScannerModule: {
          BarCodeType: { type: 'object' },
          Type: { type: 'object' },
          addListener: { type: 'function' },
          removeListeners: { type: 'function' },
          scanFromURLAsync: { type: 'function' },
        },
        ExpoFaceDetector: {
          Classifications: { type: 'object' },
          Landmarks: { type: 'object' },
          Mode: { type: 'object' },
          addListener: { type: 'function' },
          detectFaces: { type: 'function' },
          removeListeners: { type: 'function' },
        },
        ExpoGoogleSignIn: {
          ERRORS: { type: 'object' },
          SCOPES: { type: 'object' },
          TYPES: { type: 'object' },
          addListener: { type: 'function' },
          disconnectAsync: { type: 'function' },
          getCurrentUserAsync: { type: 'function' },
          getPhotoAsync: { type: 'function' },
          getTokensAsync: { type: 'function' },
          initAsync: { type: 'function' },
          isConnectedAsync: { type: 'function' },
          removeListeners: { type: 'function' },
          signInAsync: { type: 'function' },
          signInSilentlyAsync: { type: 'function' },
          signOutAsync: { type: 'function' },
        },
        ExpoLocalization: {
          addListener: { type: 'function' },
          country: { type: 'string' },
          getLocalizationAsync: { type: 'function' },
          isRTL: { type: 'boolean', mock: false },
          isoCurrencyCodes: { type: 'array' },
          locale: { type: 'string' },
          locales: { type: 'array' },
          removeListeners: { type: 'function' },
          timezone: { type: 'string' },
        },
        ExpoSecureStore: {
          AFTER_FIRST_UNLOCK: { type: 'number', mock: 0 },
          AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY: { type: 'number', mock: 1 },
          ALWAYS: { type: 'number', mock: 2 },
          ALWAYS_THIS_DEVICE_ONLY: { type: 'number', mock: 4 },
          WHEN_PASSCODE_SET_THIS_DEVICE_ONLY: { type: 'number', mock: 3 },
          WHEN_UNLOCKED: { type: 'number', mock: 5 },
          WHEN_UNLOCKED_THIS_DEVICE_ONLY: { type: 'number', mock: 6 },
          addListener: { type: 'function' },
          deleteValueWithKeyAsync: { type: 'function' },
          getValueWithKeyAsync: { type: 'function' },
          removeListeners: { type: 'function' },
          setValueWithKeyAsync: { type: 'function' },
        },
        ExpoTaskManager: {
          EVENT_NAME: { type: 'string' },
          addListener: { type: 'function' },
          getRegisteredTasksAsync: { type: 'function' },
          getTaskOptionsAsync: { type: 'function' },
          isTaskRegisteredAsync: { type: 'function' },
          notifyTaskFinishedAsync: { type: 'function' },
          removeListeners: { type: 'function' },
          unregisterAllTasksAsync: { type: 'function' },
          unregisterTaskAsync: { type: 'function' },
        },
        ExpoVideoManager: {
          ScaleAspectFill: { type: 'string' },
          ScaleAspectFit: { type: 'string' },
          ScaleNone: { type: 'string' },
          ScaleToFill: { type: 'string' },
          addListener: { type: 'function' },
          removeListeners: { type: 'function' },
          setFullscreen: { type: 'function' },
        },
        ExponentCameraManager: {
          AutoFocus: { type: 'object' },
          FlashMode: { type: 'object' },
          Type: { type: 'object' },
          VideoQuality: { type: 'object' },
          VideoStabilization: { type: 'object' },
          WhiteBalance: { type: 'object' },
          addListener: { type: 'function' },
          getAvailablePictureSizes: { type: 'function' },
          pausePreview: { type: 'function' },
          record: { type: 'function' },
          removeListeners: { type: 'function' },
          resumePreview: { type: 'function' },
          stopRecording: { type: 'function' },
          takePicture: { type: 'function' },
        },
        ExponentConstants: {
          addListener: { type: 'function' },
          appOwnership: { type: 'string' },
          debugMode: { type: 'boolean', mock: true },
          deviceName: { type: 'string' },
          deviceYearClass: { type: 'number', mock: 2016 },
          experienceUrl: { type: 'string' },
          expoRuntimeVersion: { type: 'string' },
          expoVersion: { type: 'string' },
          getWebViewUserAgentAsync: { type: 'function' },
          installationId: { type: 'string' },
          isDetached: { type: 'boolean', mock: false },
          isDevice: { type: 'boolean', mock: true },
          isHeadless: { type: 'boolean', mock: false },
          linkingUri: { type: 'string' },
          manifest: { type: 'object' },
          platform: { type: 'object' },
          removeListeners: { type: 'function' },
          sessionId: { type: 'string' },
          statusBarHeight: { type: 'number', mock: 20 },
          systemFonts: { type: 'array' },
        },
        ExponentDeviceMotion: {
          Gravity: { type: 'number', mock: 9.8100004196167 },
          addListener: { type: 'function' },
          isAvailableAsync: { type: 'function' },
          removeListeners: { type: 'function' },
          setUpdateInterval: { type: 'function' },
        },
        ExponentFileSystem: {
          addListener: { type: 'function' },
          bundleDirectory: { type: 'object', mock: null },
          bundledAssets: { type: 'object', mock: null },
          cacheDirectory: { type: 'string' },
          copyAsync: { type: 'function' },
          deleteAsync: { type: 'function' },
          documentDirectory: { type: 'string' },
          downloadAsync: { type: 'function' },
          downloadResumablePauseAsync: { type: 'function' },
          downloadResumableStartAsync: { type: 'function' },
          getInfoAsync: { type: 'function' },
          makeDirectoryAsync: { type: 'function' },
          moveAsync: { type: 'function' },
          readAsStringAsync: { type: 'function' },
          readDirectoryAsync: { type: 'function' },
          removeListeners: { type: 'function' },
          writeAsStringAsync: { type: 'function' },
        },
        ExponentMediaLibrary: {
          CHANGE_LISTENER_NAME: { type: 'string' },
          MediaType: { type: 'object' },
          SortBy: { type: 'object' },
          addAssetsToAlbumAsync: { type: 'function' },
          addListener: { type: 'function' },
          createAlbumAsync: { type: 'function' },
          createAssetAsync: { type: 'function' },
          deleteAlbumsAsync: { type: 'function' },
          deleteAssetsAsync: { type: 'function' },
          getAlbumAsync: { type: 'function' },
          getAlbumsAsync: { type: 'function' },
          getAssetInfoAsync: { type: 'function' },
          getAssetsAsync: { type: 'function' },
          getMomentsAsync: { type: 'function' },
          removeAssetsFromAlbumAsync: { type: 'function' },
          removeListeners: { type: 'function' },
        },
        ExponentPrint: {
          Orientation: { type: 'object' },
          addListener: { type: 'function' },
          print: { type: 'function' },
          printToFileAsync: { type: 'function' },
          removeListeners: { type: 'function' },
          selectPrinter: { type: 'function' },
        },
      },
    },
    viewManagersNames: {
      type: 'array',
      mock: [
        'AdIconView',
        'BlurView',
        'CTKBannerView',
        'CTKNativeAd',
        'ExpoAdsAdMobBannerView',
        'ExpoAdsPublisherBannerView',
        'ExpoBarCodeScannerView',
        'ExpoLinearGradient',
        'ExpoVideoView',
        'ExponentCamera',
        'ExponentGLView',
        'MediaView',
        'VibrancyView',
      ],
    },
    callMethod: { type: 'function', functionType: 'promise' },
  },
  ExpoScreenOrientation: {
    addListener: { type: 'function', functionType: 'async' },
    doesSupportAsync: { type: 'function', functionType: 'promise' },
    getOrientationAsync: { type: 'function', functionType: 'promise' },
    getOrientationLockAsync: { type: 'function', functionType: 'promise' },
    getPlatformOrientationLockAsync: { type: 'function', functionType: 'promise' },
    lockAsync: { type: 'function', functionType: 'promise' },
    lockPlatformAsync: { type: 'function', functionType: 'promise' },
    removeListeners: { type: 'function', functionType: 'async' },
    supportsOrientationLockAsync: { type: 'function', functionType: 'promise' },
    unlockAsync: { type: 'function', functionType: 'promise' },
  },
  ExponentAR: {
    ARFaceTrackingConfiguration: { type: 'boolean', mock: false },
    ARKitVersion: { type: 'string' },
    AROrientationTrackingConfiguration: { type: 'boolean', mock: true },
    ARWorldTrackingConfiguration: { type: 'boolean', mock: true },
    OrientationTrackingVideoFormats: { type: 'array' },
    WorldTrackingVideoFormats: { type: 'array' },
    anchorsDidUpdate: { type: 'string' },
    cameraDidChangeTrackingState: { type: 'string' },
    didFailWithError: { type: 'string' },
    frameDidUpdate: { type: 'string' },
    isSupported: { type: 'boolean', mock: true },
    sessionInterruptionEnded: { type: 'string' },
    sessionWasInterrupted: { type: 'string' },
    addListener: { type: 'function', functionType: 'async' },
    getARMatrices: { type: 'function', functionType: 'sync' },
    getAutoFocusEnabled: { type: 'function', functionType: 'sync' },
    getCameraTexture: { type: 'function', functionType: 'sync' },
    getCurrentFrame: { type: 'function', functionType: 'sync' },
    getLightEstimationEnabled: { type: 'function', functionType: 'sync' },
    getPlaneDetection: { type: 'function', functionType: 'sync' },
    getProvidesAudioData: { type: 'function', functionType: 'sync' },
    getVideoFormat: { type: 'function', functionType: 'sync' },
    getWorldAlignment: { type: 'function', functionType: 'sync' },
    pause: { type: 'function', functionType: 'async' },
    performHitTest: { type: 'function', functionType: 'sync' },
    removeListeners: { type: 'function', functionType: 'async' },
    reset: { type: 'function', functionType: 'async' },
    resume: { type: 'function', functionType: 'async' },
    setAutoFocusEnabled: { type: 'function', functionType: 'async' },
    setConfigurationAsync: { type: 'function', functionType: 'promise' },
    setDetectionImagesAsync: { type: 'function', functionType: 'promise' },
    setLightEstimationEnabled: { type: 'function', functionType: 'async' },
    setPlaneDetection: { type: 'function', functionType: 'async' },
    setProvidesAudioData: { type: 'function', functionType: 'async' },
    setShouldAttemptRelocalization: { type: 'function', functionType: 'async' },
    setWorldAlignment: { type: 'function', functionType: 'async' },
    setWorldOriginAsync: { type: 'function', functionType: 'promise' },
    startAsync: { type: 'function', functionType: 'promise' },
    stopAsync: { type: 'function', functionType: 'promise' },
  },
  ExponentCalendar: {
    deleteCalendarAsync: { type: 'function', functionType: 'promise' },
    deleteEventAsync: { type: 'function', functionType: 'promise' },
    deleteReminderAsync: { type: 'function', functionType: 'promise' },
    getAttendeesForEventAsync: { type: 'function', functionType: 'promise' },
    getCalendarsAsync: { type: 'function', functionType: 'promise' },
    getEventByIdAsync: { type: 'function', functionType: 'promise' },
    getEventsAsync: { type: 'function', functionType: 'promise' },
    getReminderByIdAsync: { type: 'function', functionType: 'promise' },
    getRemindersAsync: { type: 'function', functionType: 'promise' },
    getSourceByIdAsync: { type: 'function', functionType: 'promise' },
    getSourcesAsync: { type: 'function', functionType: 'promise' },
    saveCalendarAsync: { type: 'function', functionType: 'promise' },
    saveEventAsync: { type: 'function', functionType: 'promise' },
    saveReminderAsync: { type: 'function', functionType: 'promise' },
  },
  ExponentErrorRecovery: { setRecoveryProps: { type: 'function', functionType: 'async' } },
  ExponentHaptic: {
    impact: { type: 'function', functionType: 'async' },
    notification: { type: 'function', functionType: 'async' },
    selection: { type: 'function', functionType: 'async' },
  },
  ExponentImageManipulator: { manipulate: { type: 'function', functionType: 'promise' } },
  ExponentNotifications: {
    cancelAllScheduledNotificationsAsync: { type: 'function', functionType: 'promise' },
    cancelScheduledNotificationAsync: { type: 'function', functionType: 'promise' },
    createCategoryAsync: { type: 'function', functionType: 'promise' },
    deleteCategoryAsync: { type: 'function', functionType: 'promise' },
    getBadgeNumberAsync: { type: 'function', functionType: 'promise' },
    getDevicePushTokenAsync: { type: 'function', functionType: 'promise' },
    getExponentPushTokenAsync: { type: 'function', functionType: 'promise' },
    legacyScheduleLocalRepeatingNotification: { type: 'function', functionType: 'promise' },
    presentLocalNotification: { type: 'function', functionType: 'promise' },
    scheduleLocalNotification: { type: 'function', functionType: 'promise' },
    setBadgeNumberAsync: { type: 'function', functionType: 'promise' },
  },
  ExponentScopedModuleRegistry: {},
  ExponentSplashScreen: {
    hide: { type: 'function', functionType: 'async' },
    preventAutoHide: { type: 'function', functionType: 'async' },
  },
  ExponentStoreReview: {
    isSupported: { type: 'boolean', mock: true },
    requestReview: { type: 'function', functionType: 'async' },
  },
  ExponentUpdates: {
    checkForUpdateAsync: { type: 'function', functionType: 'promise' },
    fetchUpdateAsync: { type: 'function', functionType: 'promise' },
    reload: { type: 'function', functionType: 'async' },
    reloadFromCache: { type: 'function', functionType: 'async' },
  },
  ExponentUtil: {},
  LottieAnimationView: {
    VERSION: { type: 'number', mock: 1 },
    play: { type: 'function', functionType: 'async' },
    reset: { type: 'function', functionType: 'async' },
  },
  RNAWSCognito: {
    computeModPow: { type: 'function', functionType: 'async' },
    computeS: { type: 'function', functionType: 'async' },
  },
  RNBranch: {
    ADD_TO_CART_EVENT: { type: 'string' },
    ADD_TO_WISHLIST_EVENT: { type: 'string' },
    INIT_SESSION_ERROR: { type: 'string' },
    INIT_SESSION_SUCCESS: { type: 'string' },
    PURCHASED_EVENT: { type: 'string' },
    PURCHASE_INITIATED_EVENT: { type: 'string' },
    REGISTER_VIEW_EVENT: { type: 'string' },
    SHARE_COMPLETED_EVENT: { type: 'string' },
    SHARE_INITIATED_EVENT: { type: 'string' },
    STANDARD_EVENT_ACHIEVE_LEVEL: { type: 'string' },
    STANDARD_EVENT_ADD_PAYMENT_INFO: { type: 'string' },
    STANDARD_EVENT_ADD_TO_CART: { type: 'string' },
    STANDARD_EVENT_ADD_TO_WISHLIST: { type: 'string' },
    STANDARD_EVENT_COMPLETE_REGISTRATION: { type: 'string' },
    STANDARD_EVENT_COMPLETE_TUTORIAL: { type: 'string' },
    STANDARD_EVENT_INITIATE_PURCHASE: { type: 'string' },
    STANDARD_EVENT_PURCHASE: { type: 'string' },
    STANDARD_EVENT_RATE: { type: 'string' },
    STANDARD_EVENT_SEARCH: { type: 'string' },
    STANDARD_EVENT_SHARE: { type: 'string' },
    STANDARD_EVENT_SPEND_CREDITS: { type: 'string' },
    STANDARD_EVENT_UNLOCK_ACHIEVEMENT: { type: 'string' },
    STANDARD_EVENT_VIEW_CART: { type: 'string' },
    STANDARD_EVENT_VIEW_ITEM: { type: 'string' },
    STANDARD_EVENT_VIEW_ITEMS: { type: 'string' },
    createUniversalObject: { type: 'function', functionType: 'promise' },
    generateShortUrl: { type: 'function', functionType: 'promise' },
    getCreditHistory: { type: 'function', functionType: 'promise' },
    getFirstReferringParams: { type: 'function', functionType: 'promise' },
    getLatestReferringParams: { type: 'function', functionType: 'promise' },
    getShortUrl: { type: 'function', functionType: 'promise' },
    listOnSpotlight: { type: 'function', functionType: 'promise' },
    loadRewards: { type: 'function', functionType: 'promise' },
    logEvent: { type: 'function', functionType: 'promise' },
    logout: { type: 'function', functionType: 'async' },
    openURL: { type: 'function', functionType: 'async' },
    redeemInitSessionResult: { type: 'function', functionType: 'promise' },
    redeemRewards: { type: 'function', functionType: 'promise' },
    registerView: { type: 'function', functionType: 'promise' },
    releaseUniversalObject: { type: 'function', functionType: 'async' },
    sendCommerceEvent: { type: 'function', functionType: 'promise' },
    setIdentity: { type: 'function', functionType: 'async' },
    showShareSheet: { type: 'function', functionType: 'promise' },
    userCompletedAction: { type: 'function', functionType: 'async' },
    userCompletedActionOnUniversalObject: { type: 'function', functionType: 'promise' },
  },
  RNBranchEventEmitter: {
    addListener: { type: 'function', functionType: 'async' },
    removeListeners: { type: 'function', functionType: 'async' },
  },
  RNGestureHandlerButton: {},
  RNGestureHandlerModule: {
    Direction: { type: 'object' },
    State: { type: 'object' },
    addListener: { type: 'function', functionType: 'async' },
    attachGestureHandler: { type: 'function', functionType: 'async' },
    createGestureHandler: { type: 'function', functionType: 'async' },
    dropGestureHandler: { type: 'function', functionType: 'async' },
    handleClearJSResponder: { type: 'function', functionType: 'async' },
    handleSetJSResponder: { type: 'function', functionType: 'async' },
    removeListeners: { type: 'function', functionType: 'async' },
    updateGestureHandler: { type: 'function', functionType: 'async' },
  },
  RNSScreenContainerManager: {},
  RNSScreenManager: {},
  RNSVGCircleManager: {},
  RNSVGClipPathManager: {},
  RNSVGDefsManager: {},
  RNSVGEllipseManager: {},
  RNSVGGroupManager: {},
  RNSVGImageManager: {},
  RNSVGLineManager: {},
  RNSVGLinearGradientManager: {},
  RNSVGMaskManager: {},
  RNSVGNodeManager: {},
  RNSVGPathManager: {},
  RNSVGPatternManager: {},
  RNSVGRadialGradientManager: {},
  RNSVGRectManager: {},
  RNSVGRenderableManager: {},
  RNSVGSvgViewManager: { toDataURL: { type: 'function', functionType: 'async' } },
  RNSVGSymbolManager: {},
  RNSVGTSpanManager: {},
  RNSVGTextManager: {},
  RNSVGTextPathManager: {},
  RNSVGUseManager: {},
  RNViewShot: {
    captureRef: { type: 'function', functionType: 'promise' },
    captureScreen: { type: 'function', functionType: 'promise' },
    releaseCapture: { type: 'function', functionType: 'async' },
  },
};
