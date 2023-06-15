export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  instagram?: string;
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Özel Rozet Aile Danışma Merkezi',
  description: 'Rozet ile hayatınıza değer katın',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/logo.png',
  lang: 'tr',
  siteUrl: 'https://rozetdanismanlik.com/',
  facebook: 'https://www.facebook.com/pg/rozetdanismanlik/',
  instagram: 'https://www.instagram.com/rozetdanismanlik/',
  twitter: 'https://twitter.com/rozet_dan',
  showSubscribe: false,
  mailchimpAction: 'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
  mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
  // footer: 'is based on Gatsby Casper',
};

export default config;
