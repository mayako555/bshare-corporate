"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden pt-20 text-[#333]">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[750px] bg-[#f8fafc] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_generated.jpg" 
            alt="Hero background" 
            fill 
            className="object-cover object-center"
            priority
          />
          {/* Subtle gradient overlay to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent md:w-2/3" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-start mt-[-100px]">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-xl">
            <h1 className="text-4xl md:text-[56px] font-serif leading-[1.3] text-[#2c3e50] mb-8 font-medium tracking-wide">
              美容の未来を、<br />
              ともに創る。
            </h1>
            <p className="text-[14px] text-gray-700 mb-8 leading-[2] font-medium">
              現場を知る私たちだからこそ、<br />
              テクノロジーで美容業界の可能性を広げていく。
            </p>
            <p className="text-[10px] tracking-[0.3em] text-[#64748b] mb-10 uppercase leading-[2]">
              Beauty Empowers<br />A Brighter Tomorrow.
            </p>
            <Link
              href="/company"
              className="inline-flex items-center space-x-3 bg-[#1e2733] text-white px-8 py-3.5 rounded-full text-xs font-sans tracking-widest hover:opacity-90 transition-all shadow-lg"
            >
              <span>美shareについて</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="py-24 md:py-36 relative bg-[#f1f5f8] border-b border-white overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-80">
           <Image src="/images/vision_highres.jpg" alt="vision bg" fill className="object-cover object-center" />
         </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 max-w-2xl">
              <span className="text-[10px] font-sans tracking-[0.3em] text-gray-500 mb-6 block font-bold">OUR VISION</span>
              <h2 className="text-3xl md:text-[40px] font-serif leading-[1.6] text-[#2c3e50] mb-8 font-medium">
                テクノロジーで、<br />
                美容業界のあたりまえを変えていく。
              </h2>
              <p className="text-[13px] text-gray-700 leading-[2.2] font-medium">
                美shareは、美容の現場とテクノロジーの力で、<br />
                サロン・働く人・お客様・業界全体が、もっと豊かに、もっと自由に輝ける未来をつくります。
              </p>
            </div>
            <div className="flex-1 w-full relative h-[300px] hidden md:block">
               {/* Translucent Glass text area */}
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-2xl border border-white/60 flex items-center justify-center p-8 shadow-[0_8px_32px_rgba(0,0,0,0.05)] bg-white/40 backdrop-blur-xl">
                 <p className="font-serif text-[#64748b] text-sm tracking-[0.4em] leading-[2.5] uppercase font-bold">
                   A<br />BRIGHTER<br />BEAUTY<br />INDUSTRY
                 </p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR BUSINESS */}
      <section className="py-24 bg-[#fafbfc]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="flex items-baseline space-x-6">
              <span className="text-[10px] font-sans tracking-[0.3em] text-gray-400">OUR BUSINESS</span>
              <h2 className="text-2xl md:text-3xl font-serif text-[#2c3e50]">美容の可能性を広げる、5つの事業。</h2>
            </div>
            <Link href="/business" className="text-[11px] font-sans text-gray-800 flex items-center hover:opacity-70 transition-opacity mt-4 md:mt-0">
              すべての事業を見る <ArrowRight size={12} className="ml-2" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { num: "01", title: "SALON AGENT", sub: "美容サロン向け\n経営支援クラウド", desc: "予約・顧客・売上・経費・スタッフを一元管理。AIが経営の「次の一手」まで提案する、サロンのパートナー。", img: "/images/business_1_new.jpg", link: "/salon-agent" },
              { num: "02", title: "Web制作事業", sub: "サロン・店舗・個人事業主向け\nWebサイト制作", desc: "美容業界に特化したデザインとマーケティングで、想いが伝わるホームページを最短で。", img: "/images/business_2_new.jpg", link: "https://bshare.shop/" },
              { num: "03", title: "美容サロン事業", sub: "まつげ・眉サロンの店舗運営\n美容サービス", desc: "神戸を拠点に、まつげ・眉の専門サロンを展開。現場で得た知見を、テクノロジーと教育に活かしています。", img: "/images/business_3_new.jpg", link: "https://www.jasminelash.com/" },
              { num: "04", title: "教育・スクール事業", sub: "美容技術・サロン運営に関する\n講習・教育", desc: "技術だけでなく、経営・接客・デザインまで、美容のプロを育てる実践的なスクールを提供します。", img: "/images/business_4_new.jpg", link: "https://jl-academy.vercel.app/" },
              { num: "05", title: "Bshare", sub: "アイデザイナー専用\n動画サービス", desc: "ライブ授業も動画授業も配信・受講が自由にできる、アイデザイナーのためのオンライン学習プラットフォーム。", img: "/images/business_5_new.jpg", link: "https://bshare.co.jp/" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.1 } } }}
                className="bg-white rounded border border-gray-100 flex flex-col h-full overflow-hidden"
              >
                <div className="relative h-48 w-full bg-gray-50">
                  <Image src={item.img} alt={item.title} fill className="object-cover mix-blend-multiply" />
                  <span className="absolute top-4 left-4 text-3xl font-serif text-white drop-shadow-md">{item.num}</span>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-lg font-serif mb-3 text-[#2c3e50]">{item.title}</h3>
                  <p className="text-[12px] font-bold text-gray-700 mb-4 whitespace-pre-line leading-[1.6]">{item.sub}</p>
                  <p className="text-[11px] text-gray-500 mb-8 leading-[1.8] flex-1">{item.desc}</p>
                  <Link href={item.link} target={item.link.startsWith("http") ? "_blank" : "_self"} className="text-[11px] text-gray-800 flex items-center hover:opacity-70 transition-opacity mt-auto">
                    詳しく見る <ArrowRight size={12} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="w-full md:w-1/5 py-6 md:py-0 md:pr-8 text-center">
             <h2 className="text-xl font-serif text-[#2c3e50] leading-[1.6]">
               数字で見る<br/>私たちの今
             </h2>
          </div>
          {[
            { num: "3", label: "運営サロン店舗" },
            { num: "11", label: "SALON AGENT\n導入店舗 (検証中含む)" },
            { num: "13+", label: "美容業界歴" },
            { num: "100+", label: "目標導入店舗数\n(2027年)" },
          ].map((stat, idx) => (
            <div key={idx} className="w-full md:w-1/5 py-6 md:py-0 flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-serif text-[#2c3e50] mb-3">{stat.num}</div>
              <p className="text-[10px] text-gray-500 whitespace-pre-line tracking-wider leading-[1.6]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US */}
      <section className="relative h-[600px] flex overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#e8eef2] flex w-full">
            <div className="relative w-full md:w-1/2 h-[300px] md:h-full block">
               <Image src="/images/about_highres.jpg" alt="About" fill className="object-cover object-center" />
               <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
               <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16 z-10">
                 <p className="text-white text-3xl md:text-4xl font-serif leading-[1.6] tracking-[0.2em] drop-shadow-md">
                   BEAUTY<br/>FOR A<br/>BETTER<br/>TOMORROW
                 </p>
                 <p className="text-white text-xs tracking-widest mt-8 drop-shadow-md font-medium">
                   美しさが、<br/>もっと生きる社会へ。
                 </p>
               </div>
            </div>
            <div className="relative w-full md:w-1/2 h-full bg-[#f8fafc] flex flex-col justify-center px-12 md:px-24">
                <span className="text-[10px] font-sans tracking-[0.3em] text-gray-400 mb-6 block">ABOUT US</span>
                <h2 className="text-3xl md:text-4xl font-serif leading-[1.4] text-[#2c3e50] mb-8">
                  美容の力で、<br />
                  もっと豊かな社会を。
                </h2>
                <p className="text-[12px] text-gray-600 leading-[2.2] mb-10 max-w-sm relative z-10">
                  美share株式会社は、<br/>美容業界で13年以上培ってきた経験と、<br/>テクノロジー・教育・店舗運営を通じて、<br/>美容業界の持続的な発展に貢献します。
                </p>
                <Link href="/company" className="inline-flex w-48 justify-center items-center space-x-2 border border-[#2c3e50] text-[#2c3e50] px-6 py-3 rounded-full text-[11px] font-sans tracking-widest hover:bg-[#2c3e50] hover:text-white transition-all z-10">
                  <span>私たちについて</span>
                  <ArrowRight size={12} />
                </Link>
                {/* Watermark */}
                <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 overflow-hidden">
                   <p className="text-[200px] font-serif leading-none tracking-tighter -mr-12 -mb-8">美<br/><span className="text-[100px] tracking-normal">share</span></p>
                </div>
            </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-16 bg-[#fafbfc]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-baseline">
           <div className="w-full md:w-48 shrink-0 mb-8 md:mb-0">
             <span className="text-[11px] font-sans tracking-[0.2em] font-bold text-gray-800 block">NEWS</span>
           </div>
           <div className="flex-1 w-full space-y-5">
              {[
                { date: "2024.10.05", cat: "お知らせ", title: "コーポレートサイトを公開しました" },
                { date: "2024.09.25", cat: "プレスリリース", title: "美容サロン向け経営支援クラウド「SALON AGENT」β提供開始" },
                { date: "2024.09.10", cat: "イベント", title: "ビューティーワールドジャパン大阪に出展します" },
              ].map((news, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pb-5 border-b border-gray-100 last:border-0">
                   <div className="flex items-center gap-6 w-56 shrink-0">
                     <span className="text-[11px] font-sans text-gray-500 font-medium">{news.date}</span>
                     <span className="text-[10px] font-sans text-gray-800">{news.cat}</span>
                   </div>
                   <Link href="/news" className="text-[13px] font-sans text-gray-700 hover:text-gray-400 transition-colors">
                     {news.title}
                   </Link>
                </div>
              ))}
           </div>
           <div className="shrink-0 mt-8 md:mt-0 md:ml-12">
             <Link href="/news" className="text-[11px] font-sans text-gray-800 flex items-center hover:opacity-70 transition-opacity">
               すべてのお知らせ <ArrowRight size={12} className="ml-2" />
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
