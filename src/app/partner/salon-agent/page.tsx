import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SALON AGENT 紹介パートナー制度 | 美share株式会社",
  description: "美容ディーラー、スクール、開業支援・コンサルティング、美容業界向けWeb制作会社の皆さまへ。SALON AGENTの紹介・導入支援を担うパートナー制度と、役割・始めるまでの4ステップをご案内します。",
};
const contact = "/contact?subject=" + encodeURIComponent("SALON AGENT パートナー制度");
const button = "inline-flex min-h-12 items-center justify-center rounded-full bg-[#1e2733] px-7 py-4 text-sm leading-6 text-white transition-colors hover:bg-[#45405f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#76669b]";
const audiences = [
  ["美容ディーラー", "商材の提案中に「紙のカルテをデジタルにしたい」と相談されたとき、顧客管理の選択肢としてご紹介いただけます。"],
  ["美容スクール", "卒業生から「独立後の予約や売上をどう管理すればいい？」と相談されたときにご紹介いただけます。"],
  ["サロン開業支援・コンサルティング事業者", "開業準備中に「予約・顧客・売上を一か所で管理したい」と相談されたときにご紹介いただけます。"],
  ["美容業界向けWeb制作会社", "ホームページ制作中に「予約を受け付けた後の顧客管理も整えたい」と相談されたときにご紹介いただけます。"],
];
const steps = [
  ["お問い合わせ", "「パートナー制度に興味がある」と、現在のお仕事を添えてご連絡ください。"],
  ["面談", "どのようなサロンとお付き合いがあるか、ご紹介や導入支援の進め方を一緒に相談します。"],
  ["提携条件の確認", "紹介方法・導入支援の担当範囲・報酬の条件を確認し、双方で合意します。"],
  ["ご紹介・導入支援開始", "合意した役割分担に沿って、サロンへのご紹介と導入支援を進めていただきます。"],
];
export default function SalonAgentPartnerPage() {
  return <div data-partner-page className="bg-[#fcfbf8] text-[#1e2733]">
    <section className="bg-gradient-to-br from-[#f8f5ee] via-[#fcfbf8] to-[#eee9f6] pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Link href="/partner" className="text-sm text-[#686174] underline underline-offset-4">採用・パートナー</Link>
        <p className="mt-10 mb-6 text-sm tracking-wider text-[#76669b]">SALON AGENT 紹介パートナー制度</p>
        <h1 className="max-w-4xl font-serif text-[clamp(27px,3.6vw,46px)] leading-[1.75] [text-wrap:pretty]"><span className="inline-block">サロンを支えるご提案を、</span><br className="hidden md:block" /><span className="inline-block">事業の新たな価値に。</span></h1>
        <p className="mt-8 max-w-2xl text-sm leading-[2.2] md:text-base">お取引先のサロンにSALON AGENTをご紹介いただき、導入支援まで担っていただくパートナー制度です。当社と連携しながら、サロンの導入を支えていただきます。サロンのご紹介・導入支援に応じて報酬をお支払いします。報酬の詳細や条件は、面談時にご案内します。</p>
        <Link href={contact} className={button + " mt-9"}>パートナー制度について相談する</Link>
      </div>
    </section>
    <section aria-labelledby="benefits-title" className="mx-auto max-w-6xl px-6 pt-20 md:px-10 md:pt-24">
      <p className="text-xs tracking-[.25em] text-[#76669b]">BENEFITS</p>
      <h2 id="benefits-title" className="mt-5 font-serif text-2xl leading-relaxed md:text-3xl">いつものサロン支援に、新しい選択肢を。</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">{[
        ["提案の選択肢が広がる", "既存のお取引先へ、予約や顧客情報などの日々の管理を支える選択肢を提案できます。"],
        ["ご紹介から導入まで支える", "サロンの課題を聞き、SALON AGENTのご紹介から導入支援まで携わっていただきます。当社と連携しながら進めます。"],
        ["ご紹介・導入支援に応じた報酬", "サロンのご紹介・導入支援に応じて報酬をお支払いします。報酬の詳細や条件は、面談時にご案内します。"],
      ].map(([title, text]) => <article key={title} className="rounded-2xl border border-[#e7e1ee] bg-white p-7"><h3 className="font-serif text-xl leading-8">{title}</h3><p className="mt-4 text-sm leading-8 text-[#596170]">{text}</p></article>)}</div>
      <aside className="mt-10 rounded-2xl bg-[#f1edf7] p-7 md:p-9" aria-label="SALON AGENTのサービス紹介">
        <h3 className="font-serif text-xl leading-8">ご紹介の前に、サービスを知る</h3>
        <p className="mt-4 text-sm leading-8 text-[#596170]">予約・顧客・売上・スタッフ管理をひとつに。機能や利用プランは、SALON AGENTの公式サイトでご確認いただけます。</p>
        <a href="https://salonagent.jp/" className="mt-5 inline-flex min-h-12 items-center text-sm leading-7 text-[#45405f] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">SALON AGENTのサービスを見る<span aria-hidden="true" className="ml-3">→</span></a>
      </aside>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
      <p className="text-xs tracking-[.25em] text-[#76669b]">PARTNERS</p>
      <h2 className="mt-5 font-serif text-2xl leading-relaxed md:text-3xl">こんな相談を受ける方に向いています</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">{audiences.map(([title, text]) => <article key={title} className="rounded-2xl border border-[#e7e1ee] bg-white p-7 md:p-9"><h3 className="font-serif text-xl leading-9">{title}</h3><p className="mt-4 text-sm leading-8 text-[#596170]">{text}</p></article>)}</div>
    </section>
    <section className="border-y border-[#e7e1ee] bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10"><p className="text-xs tracking-[.25em] text-[#76669b]">OUR ROLES</p><h2 className="mt-5 font-serif text-2xl leading-relaxed md:text-3xl">ご紹介から導入支援まで、当社とともに。</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2"><article className="rounded-2xl bg-[#f8f5ee] p-8"><h3 className="font-serif text-xl">① パートナーの役割</h3><p className="mt-5 text-sm leading-8">パートナーの皆さまには、サロンの課題を伺い、SALON AGENTのご紹介と導入支援を行っていただきます。当社と連携しながら、導入を進めます。連絡先を共有する前に、ご本人の了承を得てください。</p></article><article className="rounded-2xl bg-[#f1edf7] p-8"><h3 className="font-serif text-xl">② 当社の役割</h3><p className="mt-5 text-sm leading-8">当社は、サービスの詳しい説明や専門的なご相談への対応を通じて、パートナーの皆さまの導入支援をサポートします。サロンの状況に応じて連携して進めます。</p></article></div>
        <p className="mt-7 text-sm leading-8 text-[#596170]">具体的な担当範囲や連携の進め方は、提携前に双方で確認します。</p>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24"><p className="text-xs tracking-[.25em] text-[#76669b]">FLOW</p><h2 className="mt-5 font-serif text-2xl md:text-3xl">始めるまでの4ステップ</h2><ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{steps.map(([title,text],i)=><li key={title} className="border-t border-[#cfc4e2] pt-6"><p className="text-sm tracking-widest text-[#76669b]">STEP 0{i+1}</p><h3 className="mt-4 font-serif text-xl">{title}</h3><p className="mt-4 text-sm leading-8 text-[#596170]">{text}</p></li>)}</ol></section>
    <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-24" aria-labelledby="faq-title">
      <p className="text-xs tracking-[.25em] text-[#76669b]">FAQ</p>
      <h2 id="faq-title" className="mt-5 font-serif text-2xl leading-relaxed md:text-3xl">よくあるご質問</h2>
      <details className="mt-8 rounded-2xl border border-[#e7e1ee] bg-white p-6 md:p-8">
        <summary className="cursor-pointer py-2 text-base leading-8 focus-visible:outline-2 focus-visible:outline-offset-4">サービス説明や導入支援は誰が行いますか？</summary>
        <p className="mt-4 text-sm leading-8 text-[#596170]">パートナーの皆さまには、SALON AGENTのご紹介に加え、サロンへの導入支援も行っていただきます。当社は、サービスの詳しい説明や専門的なご相談への対応などで連携し、導入をサポートします。具体的な担当範囲や連携方法は、提携前に双方で確認します。</p>
      </details>
    </section>
    <section className="px-6 pb-24 md:px-10"><div className="mx-auto max-w-6xl rounded-2xl bg-[#1e2733] p-8 text-white md:p-14"><h2 className="font-serif text-2xl leading-relaxed md:text-3xl">パートナー報酬について</h2><p className="mt-6 text-sm leading-8 text-[#e5dfef]">サロンのご紹介・導入支援に応じて報酬をお支払いします。報酬の詳細や条件は、面談時にご案内します。</p><p className="mt-5 text-base leading-8">まずは「自分の事業でも紹介できそうか」から、お気軽にご相談ください。</p><Link href={contact} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#eee9f6] px-7 py-4 text-sm leading-6 text-[#1e2733] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">パートナー制度について相談する</Link></div></section>
  </div>;
}
