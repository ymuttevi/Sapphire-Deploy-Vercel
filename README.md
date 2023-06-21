Team name
Sapphire

Category
Best Enhancement to XM Cloud

Description
⟹ A Content Hub ONE and NEXTJS Component Library has been developed as a part of the Sitecore Hackathon 2023 – Best Enhancement to XM Cloud. This Component Library can be used to develop a basic site in Sitecore Content Hub ONE along with NextJS. As a part of this, the components developed include below 
-	Header – Logo and Menu Items
-	Carousel – Image and Content 
-	Tabs – Image and Text Tabs
-	Portfolio – Images List
-	Partner Carousel – Partner Image and Text
-	Promo – Text Component
-	Image with Overlay Component 
-	Form – Contact Us Form
-	Map – Sitecore Map 
-	Testimonials – Client Feedback Component
-	Footer – Social Links and Text 
These components can be used to develop a basic website and can be extended for Complex website as well.


Module Purpose
A Compoent Library for Content Hub ONE and NextJs in the XM Cloud.

document is located at https://github.com/Sitecore-Hackathon/2023-Sapphire/blob/main/Sitecore%20Hackathon%202023-%20Sapphire%20Team.pdf



Video link
⟹ Provide a video highlighing your Hackathon module submission and provide a link to the video. You can use any video hosting, file share or even upload the video to this repository. Just remember to update the link below

Video Link: https://github.com/Sitecore-Hackathon/2023-Sapphire/blob/main/Sitecore%20Hackathon%202023%20-%20Sapphire.mp4

Pre-requisites and Dependencies
⟹ Content Hub ONE XM CLOUD with the access to the URL https://content.sitecorecloud.io/


List any dependencies
Install the NPM Packages in the document and also the Content Hub ONE CLI as mentioned in the doc.

Installation instructions
⟹ Follow the Document for detailed instructions.

# Sapphire-content-hub-one-nextjs-component-library

## Clone this repository
Clone this repository to your local drive. 

## Install required npm packages
In the root of your repository folder run: 

    npm install

## setup .env 
Copy .env.example file in your repository root and rename it to ".env".
In there fill the following values:

SITECORE_CLIENT_ID --> You find the Client Id in the Content Hub ONE app under 'Settings'>'OAuthClient'>'Client Credentials'

SITECORE_CLIENT_SECRET. --> You find the Client Secret in the Content Hub ONE app under 'Settings'>'OAuthClient'>'Client Credentials'


SITECORE_ENDPOINT_URL  --> Here you need the Delivery API Url e.g.: https://edge.sitecorecloud.io/api/graphql/v1. More Information you find in the [Delivery API Documentation](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/graphql--preview-and-delivery-apis.html). 

SITECORE_DEV_AUTH_TOKEN --> In Content Hub ONE you need to create an API Key. This can be done via the [Content Hub ONE App](https://doc.sitecore.com/ch-one/en/users/content-hub-one/content-delivery--manage-api-keys.html), CLI or [Content Management API ](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/graphql--api-keys.html)  

This is required to connect your App with the Content Hub ONE tenant.



### Install the Content Hub ONE CLI. 
Check the [documentation](https://doc.sitecore.com/ch-one/en/developers/content-hub-one/content-hub-one-cli--install-and-run-the-cli.html).

## Serialization

### Media items and Files
Currently the CLI cannot handle Media Assets and Media Items. These need to be created manually.

### Push the serialized content types into your Content Hub ONE tenant. 
Navigate with your console to the serialization folder within your solution. Run:

    ch-one-cli ser push content-type

### Push the serialized content items into your Content Hub ONE tenant. 
Navigate with your console to the serialization folder within your solution. Run: 

    ch-one-cli ser push content-item -c "menu"

    ch-one-cli ser push content-item -c "header"

    ch-one-cli ser push content-item -c "Custompage"

### Publish Content Types, Media Items And Content Items
Go to the Content Hub ONE app and publish in the following order:
1. Content Types
2. Media Items
3. Content Items

If you are approaching the Delivery API items need to be published to be available. Using the preview API, publishing is not required.

## Start the application

run the development server:

npm run dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

