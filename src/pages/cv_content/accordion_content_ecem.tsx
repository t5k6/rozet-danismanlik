import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function AccordionGokcin() {
  return (
    <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
      <em>
      Sağlıklı Beslenme ve Fitoterapi Uzmanı.
      </em>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Eğitim</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
        Bursa Atatürk Anadolu Lisesi mezunudur. Beslenme ve Diyetetik eğitimini 2016 yılında Yeditepe Üniversitesi’nde tamamlamıştır. 
        Lisans Tezi: Migren Tedavisinde Beslenme.
        2018 yılında Fitoterapi Yüksek Lisansını Yeditepe Üniversitesi Eczacılık Fakültesi’nde tamamlamıştır. Yüksek Lisans Bitirme Projesi: Emzirme Döneminde Kullanılan Süt Artırıcı Bitkiler.          
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          {' '}
          <AccordionItemButton>İş Deneyimi</AccordionItemButton>{' '}
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            <ul>
              <li>
              2018-2019 PoziFit Beslenme
              </li>
              <li>
              2017-2018 Özel Doruk Bursa Hastanesi
              </li>
              <li>
              2017 Anadolu Sağlık Merkezi
              </li>
              <li>2017 Medhome Laboratuvar Görüntüleme Merkezi’nde Adidas Merkezinde işyeri diyetisyeni olarak çalışmıştır.</li>
            </ul>
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          {' '}
          <AccordionItemButton>Mesleki Eğitimler / Sertifikalar</AccordionItemButton>{' '}
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            <ul>
              <li>
              Psikodiyet Workshop
              </li>
              <li>
              V.Ulusal Sağlıklı Yaşam Sempozyumu
              </li>
              <li>Briatrik Cerrahi Alanında Diyetisyen Rolü</li>
              <li>Karbonhidrat Sayımı</li>
              <li>İş Sağlığı ve Güvenliği Eğitimi </li>
              <li>IV. Ulusal Sağlıklı Yaşam Sempozyumu</li>
              <li>
              Anoreksiyadan Obeziteye Yeme Bozuklukları
              </li>
              <li>Acıbadem Sağlıklı Yaşam Günleri: Spor ve Beslenme</li>
            </ul>
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
