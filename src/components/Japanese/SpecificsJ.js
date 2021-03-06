import React from "react";
import dividerImg from "../../media/divider.jpg";

export default class SpecificsJ extends React.Component {
  render() {
    return (
      <div className="">
        <div>
          <img className="divider" src={dividerImg} alt="KOB Translation" />
          <h2>翻訳サービス</h2>
          <hr />
          <p>
            翻訳とは一つの言語から別の言語へ単に言葉を置き換えることではなく、読者に本来の意味を正確に伝えることです。私たちは訳語の微妙な部分にまで気を配ることにより、問題解決手段としての翻訳サービスを提供します。
          </p>
        </div>
        <h3>主な業務内容</h3>
        <p>
          ホスピタリティー業界：レストラン、ホテル、airbnb
          (民泊）、タクシー会社、美術館、小売店など
        </p>
        <p>一般：各種文書、チラシ、パンフレット、手紙、看板、取扱説明書など</p>
        <h3>ウェブサイト＆ソーシャルメディアの翻訳</h3>
        <p>
          多くの外国人も私たちと同様にインターネット検索でサービスや飲食店を探します。外国人顧客層を取り込むためには、英語版ウェブサイト、広告、インスタグラム、フェイスブックなどは必須です。日本における英語での情報量はまだまだ限られています。外国人へのアピールは今がチャンスです。
        </p>
        <h3>安心保証</h3>
        <p>
          納品後、ご満足いただけない場合は２週間以内にお申し出ください。修正します。お支払いは安心の後払いです。
        </p>
        <h3>納品</h3>
        <p>
          納品は電子メール、郵送、宅急便により行います。送料はお客様負担です。
        </p>
        <h3>料金・かんたん決済</h3>
        <h5>料金</h5>
        <p>
          料金は仕事量により決まります。ご注文に先立ちお見積り金額を提示しますので、ご納得いただいた上でお申し込みいただきます。
        </p>
        <h5>お支払い</h5>
        <p>
          納品後２週間以内に
          <a
            href="https://www.paypal.com/jp/webapps/mpp/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            ペイパル
          </a>
          または銀行振込にてお支払いください。
        </p>
        <p>
          <a
            href="https://www.paypal.com/jp/webapps/mpp/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            ペイパル
          </a>
          とは、世界で2億5000万人以上が利用する「安全」で「かんたん」なオンライン決済サービスです。ペイパルでのお支払い手数料は当社が負担しますので、お客様は手数料ゼロでお支払いができます。ペイパルの年会費、登録料は無料です。
        </p>
        <p>銀行振込によるお支払い手数料はお客様のご負担になります。</p>
      </div>
    );
  }
}
