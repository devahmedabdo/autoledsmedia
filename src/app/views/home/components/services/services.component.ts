import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor() {}
  services: any = [
    {
      name: 'FACEBOOK ADS',
      icon: 'facebook.svg',
      dis: `Get the social media traffic you deserve 
      with our Facebook ads. Our team of 
      experts uses creative strategies to 
      connect you with your target audience 
      and generate high-quality leads. With 
      our help, you'll be able to build a loyal 
      following and increase your bottom line.`,
    },
    {
      name: 'INSTAGRAM ADS ',
      icon: 'instgram.svg',
      dis: `At our marketing agency, we know the 
      importance of Instagram in today's online 
      marketplace. That's why we offer 
      cutting-edge Instagram ad services 
      that will put your business in front of 
      the right people. With our help, you'll 
      be able to increase brand awareness 
      and drive traffic to your website.`,
    },
    {
      name: 'WEB DESIGN',
      icon: 'code.svg',
      dis: `Your website is the face of your business 
      online. That's why our team of designers 
      and developers are committed to 
      delivering top-quality web design and 
      development services. From custom
      designs to mobile-friendly layouts, 
      we'll make sure your website looks 
      great and works on any device.`,
    },
  ];
  ngOnInit(): void {}
}
