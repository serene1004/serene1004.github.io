import type { SideProject } from './side-projects';

type SideProjectTranslation = Pick<SideProject, 'name' | 'summary' | 'highlights'>;

export const sideProjectTranslationsJa: Record<string, SideProjectTranslation> = {
  'ima-kotoba': {
    name: 'Ima Kotoba',
    summary: '短い日本語の文章で今の気持ちや考えを記録し、一週間の流れを振り返る個人向け記録サービスです。',
    highlights: ['ログインせずにすぐ試せる体験モード', 'Google OAuthログインとSupabaseによる個人記録の保存', '日本語での記録と感情入力、週間の感情の振り返り'],
  },
  'kotoba-daily': {
    name: 'Kotoba Daily',
    summary: 'JLPT N5・N4・N3から学習レベルを選び、新しい単語と復習単語をセットで学ぶ日本語単語アプリです。',
    highlights: ['N5・N4・N3のレベル選択と、新規・復習単語を5語または10語ずつ学習', 'ひらがな・カタカナをキャンバスに手書きする練習', '学習の続きから再開し、難易度に合わせて復習日程を調整', '学習カレンダー・最近の学習状況・苦手な単語の単語帳'],
  },
  'seoul-travel': {
    name: 'Seoul Travel',
    summary: 'ソウルの観光地・カフェ・飲食店・自然スポットを地図で探し、天気や公共交通機関のルートも確認できる旅行サポートサービスです。',
    highlights: ['観光地・カフェ・飲食店・自然スポットの地図検索と多言語検索', '保存した候補を比較し、場所の詳細を確認', '現在の天気とおすすめの服装を確認', '出発地・目的地から公共交通機関のルートを案内'],
  },
  'web-puzzle': {
    name: 'webPuzzle',
    summary: '画像と難易度を選び、全画面キャンバス上でピースをつなげて完成させるブラウザー向けジグソーパズルです。',
    highlights: ['画像選択とEasy・Normal・Hardの難易度設定', 'ピースの接続・グループ移動・分離、キャンバスの拡大・移動', '元画像の参照、進行状況の保存、完成時間の確認'],
  },
  webcanvas: {
    name: 'webCanvas',
    summary: '描画と画像補正をひとつの流れで扱い、PNGまたは編集可能なプロジェクトとして書き出せるブラウザー向けキャンバスエディターです。',
    highlights: ['空のキャンバスへの描画と画像の配置', '明るさ・コントラスト・彩度・ぼかし・色相の調整', 'ペン・消しゴム・部分ぼかし、取り消し・やり直し', 'PNG書き出しと編集可能なプロジェクトの保存・読み込み'],
  },
  'simulated-investment': {
    name: '模擬投資サバイバル',
    summary: '市場イベントに対応して銘柄を売買し、最終資産と収益率を競うWeb投資シミュレーションゲームです。',
    highlights: ['5フェーズの市場ブリーフィングとイベントによる株価変動', '買い・売り・全額取引と保有資産の追跡', '練習モードとSupabaseによるオンラインランキングの登録・閲覧'],
  },
};
