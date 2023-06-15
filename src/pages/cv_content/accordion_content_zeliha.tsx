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

export default function AccordionZeliha() {
  return (
    <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
      <em>Uzman Psikolog; İşyeri Psikoloğu; "EMDR, Prep, Attentioner Uygulayıcısı” </em>
      <AccordionItem>
        <AccordionItemHeading>
          {' '}
          <AccordionItemButton>Eğitim</AccordionItemButton>{' '}
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Bursa Ulubatlı Hasan Anadolu Lisesi mezunudur. Psikoloji lisans eğitimini 2006 yılında
            Ankara Üniversitesi’nde tamamlamıştır. Lisans Tezi: Laboratuvardan Günlük Yaşama Bellek
            (Tez Danışmanı: Doç.Dr. Nurhan Er). 2009 yılında Sosyal Psikoloji Yüksek Lisansını da
            Ankara Üniversitesi’nde tamamlamıştır. Yüksek Lisans Tezi: İzlenim Ayarlamacılığı ve İş
            Doyumu Arasındaki İlişkinin Sosyo-ekonomik Düzeye Göre İncelenmesi (Tez Danışmanı: Prof.
            Dr. Ali Dönmez).
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>İş Deneyimi</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            <ul>
              <li>
                2006-2008 yılları arasında TÜBİTAK-SOBAG tarafından desteklenen projede (Proje No:
                106K021- Günlük Belleğin Farklı Yaş Gruplarında ve Klinik Örneklemlerde
                Değerlendirilmesi) yarı zamanlı “veri toplayıcı” olarak çalışmıştır.{' '}
              </li>
              <li>
                2007-2009 yılları arasında Uludağ Üniversitesi Hastanesi Çocuk Psikiyatri
                Polikliniği ve Kliniğinde psikolog olarak çalışmıştır.
              </li>
              <li>
                2009-2011 yılları arasında, İstanbul Ana Özel Eğitim ve Rehabilitasyon Merkezinde
                engelli çocuk, ergen ve aileleri ile çalışmıştır.
              </li>
              <li>
                2011-2015 yılları arasında, Oyak- Renault Otomobil Fabrikaları A.Ş. İnsan Kaynakları
                İş Sağlığı ve Güvenliği Departmanında işyeri psikoloğu olarak çalışmıştır, mavi-
                beyaz yaka çalışanlara bireysel olarak psikolojik destek vermiş ve örgütün
                gereksinimlerine göre eğitimler düzenlemiştir.
              </li>
              <li>
                2014 yılından beri yarı zamanlı olarak, Üstünberk Holding’ te (Martur OSB; Fompak
                Plastik; Fompak Siperlik Fabrikalarında) işyeri psikoloğu olarak hizmet vermeye
                başlamış ve halen devam etmektedir.
              </li>
              <li>2016 yılında Golf Dondurma fabrikasında,</li>
              <li>
                2017 yılında OMTEC fabrikasında işyeri psikoloğu olarak hizmet vermeye başlamıştır.{' '}
              </li>
              <li>2018 yılında da Özel Rozet Aile Danışma Merkezi’nin kurucu ortağı olmuştur.</li>
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
            İşyeri psikoluğu olarak çalıştığı kurumlarda, kurumun gereksinimlerine göre düzenlediği
            sunum ve seminer başlıkları şöyledir: Stres ve Stres ile Başaçıkma Yöntemleri; Gevşeme
            Egzersizleri; Öfke Yönetimi; Aile içi İletişim ve Anne Baba Tutumları; Kuşaklar arası
            Farklılıklar; Doğal Yaşamsal Krizler ve Başaçıkma Yöntemleri; 8 Mart Emekçi Kadınlar
            Günü ve Toplumsal Cinsiyet; İş yerinde “Empati”, Ebeveynlikte Yeni Yaklaşımlar; Çocuğum
            Okula Başlıyor…
          </p>
          <p>
            Aldığı Mesleki Eğitimler:
            <ul>
              <li>
                Travma ve EMDR I- II. Düzey Eğitim ve Süpervizyonu- Davranış Bilimleri Enstitüsü.
              </li>
              <li>
                Bilişsel ve Davranışçı Terapi Kuram ve Uygulamalar/ Eğitmen: Doç. Dr. M. Hakan
                Türkçapar.
              </li>
              <li>
                Aile ve Evlilik Terapisi Eğitimi/ Eğitmen: Prof. Dr. Hürol Fışıloğlu "Aile
                Danışmanlığı" Sertifikası..
              </li>
              <li>İnsan Kaynakları Eğitimi/ Progress Eğitim Hizmetleri.</li>
              <li>
                “Stroop Testi TBAG Formu, Sayı Dizisi Öğrenme Testi ve İşaretleme Testi"
                Sertifikası.
              </li>
              <li>"Wechsler Çocuklar İçin Zeka Ölçeği (WISC-R)" Uygulama Hakkı</li>
              <li>
                Prep Uygulayıcı Eğitimi, Akademidisleksi, Sas Smart Beyin Eğitim Programı, Steven
                Michaelis
              </li>
              <li>
                Attentioner ile Dikkatimi Topluyorum Programı Eğitimi, Uzm. Dr. Hülya Bingöl
                Çağlayan, Apamer
              </li>
              <li>
                Oyun Terapisi Eğitimi,Uzman Psikolog Sibel Cesur Akyunak, Ankara Psikiyatri ve
                Psikoterapi Akademi.
              </li>
            </ul>
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
