/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out or empty, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_right"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					},
					{
						symbol: "School Calendar",
						url: "https://calendar.google.com/calendar/ical/2md2lmmrgngodbfjjlv2lh4kmc%40group.calendar.google.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "MMM-COVID19",
			position: "top_left",
			config: {
				updateInterval: 300000,
				worldStats: true,
				delta: false,
				lastUpdateInfo: true,
				countries: [ "USA", "China", "Italy", "Spain" ],
				headerRowClass: "small",
				rapidapiKey : "9104544817msh15384748374b22bp120032jsn7d913bfa5fb2" // this is an example, do not try to use it for real
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Nashville, Tennessee",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "17b2b8ad866242f044b3b1e14d3585ce"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Nashville, Tennessee",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "17b2b8ad866242f044b3b1e14d3585ce"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-NowPlayingOnSpotify",
			position: "bottom_bar",
			config: {
				showCoverArt: false,
				clientID: "d0597adcbaaa4a549b7a65f34206d3ce",
				clientSecret: "0c3ba20c7f05490a93d705f98cde84ab",
				accessToken: "BQBuUphG0eoblPnELSN24NBxktd39NxEAe21W5SVL7WsGXcLr7HwakGlefD6oeYtI0EpkkB9A8t6G-Bj1YiMwqyMXhllWtRmH3yFYup7TdE6l4iqBR4CkjvEkm-6LKFtSVJQUT7Ye5eMdMyZSApDufC_bf6K16E",
				refreshToken: "AQDSw_IG6zAxrIYghsaqILIDCXt4yC6mDSF4DVSO8j6eIY2jYjVZ-I5ffnSZ-vRD8MWBblYco6xswGW-loK0GGCffJ3EDxh-dXU3Gpz7S6HG-iDxQcnIOF5K4D6jb5PjPPM"
			}
		},
		{
			module: 'MMM-page-indicator',
			position: 'bottom_bar',
			config: {
				pages: 3,
			}
		},
		{
			module: 'MMM-pages',
			config: {
                modules:
                    [
						[ "calendar", "MMM-NowPlayingOnSpotify" ],
						[ "MMM-COVID19", "newsfeed" ],
						[ "compliments" ]
					],
                fixed: ["clock", "MMM-page-indicator", "currentweather"],
			}
		},
		{
			module: 'MMM-KeyBindings',
			config: {
				evdev: { enabled: false },
				enableKeyboard: true,
				actions: [{
					key: "ArrowLeft",
					notification: "PAGE_DECREMENT"
				},
				{
					key: "ArrowRight",
					notification: "PAGE_INCREMENT"
				}]
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
