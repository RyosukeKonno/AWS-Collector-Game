// ゲームの状態を管理するオブジェクト
const gameState = {
    clickCount: 0,
    coinCount: 0,
    collection: [],
    currentCard: null
};

// AWSサービスのデータ
const awsServices = [
    {
        id: 1,
        name: "Amazon EC2",
        icon: "images/ec2-icon.svg",
        description: "仮想サーバーをクラウド上で提供するサービス。様々なインスタンスタイプから選択でき、柔軟にコンピューティングリソースを利用できます。"
    },
    {
        id: 2,
        name: "Amazon S3",
        icon: "images/s3-icon.svg",
        description: "スケーラブルなオブジェクトストレージサービス。データの保存と取得を簡単に行え、高い耐久性と可用性を提供します。"
    },
    {
        id: 3,
        name: "Amazon RDS",
        icon: "images/rds-icon.svg",
        description: "リレーショナルデータベースを簡単に設定、運用、スケーリングできるマネージドサービス。複数のデータベースエンジンをサポートしています。"
    },
    {
        id: 4,
        name: "AWS Lambda",
        icon: "images/lambda-icon.svg",
        description: "サーバーレスコンピューティングサービス。コードを実行するためのインフラストラクチャを管理することなく、関数を実行できます。"
    },
    {
        id: 5,
        name: "Amazon DynamoDB",
        icon: "images/dynamodb-icon.svg",
        description: "フルマネージドのNoSQLデータベースサービス。シームレスなスケーラビリティと高速なパフォーマンスを提供します。"
    },
    {
        id: 6,
        name: "Amazon CloudFront",
        icon: "images/cloudfront-icon.svg",
        description: "グローバルなコンテンツ配信ネットワーク（CDN）サービス。低レイテンシーと高速な転送速度でコンテンツを配信します。"
    },
    {
        id: 7,
        name: "AWS IAM",
        icon: "images/iam-icon.svg",
        description: "AWSリソースへのアクセスを安全に管理するためのサービス。ユーザー、グループ、ロールを作成し、権限を細かく制御できます。"
    },
    {
        id: 8,
        name: "Amazon VPC",
        icon: "images/vpc-icon.svg",
        description: "仮想ネットワークを定義し、AWSリソースを論理的に分離できるサービス。セキュリティとネットワーク構成を詳細に制御できます。"
    },
    {
        id: 9,
        name: "Amazon SNS",
        icon: "images/sns-icon.svg",
        description: "フルマネージドのメッセージング配信サービス。アプリケーション間やユーザーへの通知を簡単に送信できます。"
    },
    {
        id: 10,
        name: "Amazon SQS",
        icon: "images/sqs-icon.svg",
        description: "フルマネージドのメッセージキューイングサービス。マイクロサービス、分散システム、サーバーレスアプリケーション間のメッセージ交換を可能にします。"
    },
    {
        id: 11,
        name: "Amazon ECS",
        icon: "images/ecs-icon.svg",
        description: "コンテナ化されたアプリケーションを簡単に実行、スケーリングできるフルマネージドコンテナオーケストレーションサービス。"
    },
    {
        id: 12,
        name: "Amazon EKS",
        icon: "images/eks-icon.svg",
        description: "Kubernetesを簡単に実行できるマネージドサービス。Kubernetesのコントロールプレーンとワーカーノードを自動的に管理します。"
    },
    {
        id: 13,
        name: "AWS Fargate",
        icon: "images/fargate-icon.svg",
        description: "サーバーやクラスターを管理することなくコンテナを実行できるサーバーレスコンピューティングエンジン。"
    },
    {
        id: 14,
        name: "Amazon Aurora",
        icon: "images/aurora-icon.svg",
        description: "MySQL/PostgreSQL互換のリレーショナルデータベース。従来のデータベースの5倍のスループットを提供します。"
    },
    {
        id: 15,
        name: "Amazon Redshift",
        icon: "images/redshift-icon.svg",
        description: "ペタバイト規模のデータウェアハウスサービス。高速なクエリパフォーマンスと大規模なデータ分析を可能にします。"
    },
    {
        id: 16,
        name: "Amazon ElastiCache",
        icon: "images/elasticache-icon.svg",
        description: "Redis/Memcachedと互換性のあるインメモリデータストア。高速なパフォーマンスとスケーラビリティを提供します。"
    },
    {
        id: 17,
        name: "Amazon Route 53",
        icon: "images/route53-icon.svg",
        description: "スケーラブルなDNSウェブサービス。ドメイン登録、DNSルーティング、ヘルスチェックを提供します。"
    },
    {
        id: 18,
        name: "AWS CloudFormation",
        icon: "images/cloudformation-icon.svg",
        description: "AWSリソースをテンプレートを使って作成・管理するサービス。インフラストラクチャをコードとして扱えます。"
    },
    {
        id: 19,
        name: "Amazon API Gateway",
        icon: "images/apigateway-icon.svg",
        description: "APIの作成、公開、維持、モニタリング、保護を行うフルマネージドサービス。"
    },
    {
        id: 20,
        name: "Amazon CloudWatch",
        icon: "images/cloudwatch-icon.svg",
        description: "AWSリソースとアプリケーションのモニタリングサービス。メトリクス収集、ログ管理、アラーム設定が可能です。"
    },
    {
        id: 21,
        name: "AWS Step Functions",
        icon: "images/stepfunctions-icon.svg",
        description: "分散アプリケーションのコンポーネントを視覚的なワークフローで調整するサービス。"
    },
    {
        id: 22,
        name: "Amazon Cognito",
        icon: "images/cognito-icon.svg",
        description: "ウェブ/モバイルアプリのユーザー認証、認可、ユーザー管理を提供するサービス。"
    },
    {
        id: 23,
        name: "AWS Glue",
        icon: "images/glue-icon.svg",
        description: "ETL（抽出、変換、ロード）ジョブを簡単に作成、実行、管理できるフルマネージドサービス。"
    },
    {
        id: 24,
        name: "Amazon Athena",
        icon: "images/athena-icon.svg",
        description: "標準SQLを使用してS3のデータを直接分析できるインタラクティブなクエリサービス。"
    },
    {
        id: 25,
        name: "Amazon Kinesis",
        icon: "images/kinesis-icon.svg",
        description: "リアルタイムのストリーミングデータを簡単に収集、処理、分析できるサービス。"
    },
    {
        id: 26,
        name: "AWS Secrets Manager",
        icon: "images/secretsmanager-icon.svg",
        description: "データベース認証情報、APIキー、その他のシークレットを保護するサービス。"
    },
    {
        id: 27,
        name: "Amazon SageMaker",
        icon: "images/sagemaker-icon.svg",
        description: "機械学習モデルを構築、トレーニング、デプロイするためのフルマネージドサービス。"
    },
    {
        id: 28,
        name: "AWS AppSync",
        icon: "images/appsync-icon.svg",
        description: "GraphQL APIを簡単に開発できるマネージドサービス。リアルタイムデータ同期とオフライン機能をサポート。"
    },
    {
        id: 29,
        name: "Amazon EventBridge",
        icon: "images/eventbridge-icon.svg",
        description: "イベント駆動型アプリケーションを簡単に構築できるサーバーレスイベントバスサービス。"
    },
    {
        id: 30,
        name: "AWS Cloud9",
        icon: "images/cloud9-icon.svg",
        description: "クラウドベースの統合開発環境（IDE）。コードの記述、実行、デバッグをブラウザから行えます。"
    }
];

// DOM要素の参照を取得
const clickCountElement = document.getElementById('click-count');
const coinCountElement = document.getElementById('coin-count');
const clickButton = document.getElementById('click-button');
const gachaButton = document.getElementById('gacha-button');
const cardDisplay = document.getElementById('card-display');
const cardTitle = document.getElementById('card-title');
const cardIconImg = document.getElementById('card-icon-img');
const cardDescription = document.getElementById('card-description');
const collectButton = document.getElementById('collect-button');
const collectionElement = document.getElementById('collection');
const collectionCountElement = document.getElementById('collection-count');
const totalServicesElement = document.getElementById('total-services');

// 初期化関数
function initGame() {
    // 合計サービス数を表示
    totalServicesElement.textContent = awsServices.length;
    
    // コレクショングリッドを初期化（未収集状態で表示）
    awsServices.forEach(service => {
        const collectionItem = document.createElement('div');
        collectionItem.classList.add('collection-item', 'not-collected');
        collectionItem.dataset.id = service.id;
        
        collectionItem.innerHTML = `
            <div class="collection-icon">
                <img src="images/default-icon.svg" alt="未収集アイコン">
            </div>
            <div class="collection-name">???</div>
        `;
        
        collectionElement.appendChild(collectionItem);
    });
    
    // イベントリスナーを設定
    clickButton.addEventListener('click', handleClick);
    gachaButton.addEventListener('click', handleGacha);
    collectButton.addEventListener('click', handleCollect);
    
    // ゲーム状態を更新
    updateGameState();
}

// クリックボタンのハンドラー
function handleClick() {
    gameState.clickCount++;
    
    // 50クリックごとに10コイン獲得
    if (gameState.clickCount % 50 === 0) {
        gameState.coinCount += 10;
    }
    
    // ゲーム状態を更新
    updateGameState();
}

// ガチャボタンのハンドラー
function handleGacha() {
    // コインが足りるか確認
    if (gameState.coinCount < 10) return;
    
    // コインを消費
    gameState.coinCount -= 10;
    
    // ランダムなサービスを選択
    const randomIndex = Math.floor(Math.random() * awsServices.length);
    gameState.currentCard = awsServices[randomIndex];
    
    // カードを表示
    cardTitle.textContent = gameState.currentCard.name;
    cardIconImg.src = gameState.currentCard.icon;
    cardIconImg.alt = gameState.currentCard.name + " アイコン";
    cardDescription.textContent = gameState.currentCard.description;
    cardDisplay.classList.remove('hidden');
    
    // ゲーム状態を更新
    updateGameState();
}

// コレクションに追加ボタンのハンドラー
function handleCollect() {
    if (!gameState.currentCard) return;
    
    // 既に収集済みかチェック
    if (!gameState.collection.includes(gameState.currentCard.id)) {
        gameState.collection.push(gameState.currentCard.id);
        
        // コレクションアイテムを更新
        const collectionItem = document.querySelector(`.collection-item[data-id="${gameState.currentCard.id}"]`);
        collectionItem.classList.remove('not-collected');
        collectionItem.innerHTML = `
            <div class="collection-icon">
                <img src="${gameState.currentCard.icon}" alt="${gameState.currentCard.name} アイコン">
            </div>
            <div class="collection-name">${gameState.currentCard.name}</div>
        `;
        
        // コレクション数を更新
        collectionCountElement.textContent = gameState.collection.length;
    }
    
    // カード表示を隠す
    cardDisplay.classList.add('hidden');
    gameState.currentCard = null;
    
    // ゲーム状態を更新
    updateGameState();
}

// ゲーム状態の更新
function updateGameState() {
    // UI要素を更新
    clickCountElement.textContent = gameState.clickCount % 50;
    coinCountElement.textContent = gameState.coinCount;
    
    // ガチャボタンの有効/無効を切り替え
    gachaButton.disabled = gameState.coinCount < 10;
    
    // 進捗バーを更新
    const progressPercentage = (gameState.collection.length / awsServices.length) * 100;
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = progressPercentage + '%';
    progressBar.textContent = Math.round(progressPercentage) + '%';
    
    // すべてのサービスを収集した場合
    if (gameState.collection.length === awsServices.length) {
        alert('おめでとうございます！すべてのAWSサービスを収集しました！');
    }
}

// 画像の読み込みエラー時の処理
function handleImageError(img) {
    img.onerror = null; // 無限ループを防ぐ
    img.src = 'images/default-icon.svg';
}

// 画像のエラーハンドリングを追加
document.addEventListener('DOMContentLoaded', function() {
    // カードアイコンのエラーハンドリング
    cardIconImg.onerror = function() {
        handleImageError(this);
    };
    
    // 初期化
    initGame();
});
