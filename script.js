const canvas = document.getElementById('canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;

  // 鉄格子のパラメータ
  const barSpacing = 40;  // 縦線の間隔
  const barColor = '#555'; // 鉄格子の色
  const lineWidth = 6;     // 縦線の太さ
  let offset = 0;

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // 背景
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#111');
    gradient.addColorStop(1, '#222');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // 鉄格子（縦線）
    ctx.fillStyle = barColor;
    for (let i = -lineWidth; i < width; i += barSpacing) {
      ctx.fillRect(i + offset, 0, lineWidth, height);
    }

    // 横線も追加（鉄格子感を強調）
    for (let j = 0; j < height; j += 50) {
      ctx.fillRect(0, j, width, 3);
    }

    // アニメーション：縦線をスライドさせる
    offset = (offset + 1) % barSpacing;

    // ロゴを中央に描画
    ctx.font = 'bold 28px Arial';
    ctx.fillStyle = '#f00';
    ctx.textAlign = 'center';
    ctx.fillText('PRISON BREAK', width / 2, height / 2);

    requestAnimationFrame(draw);
  }
  draw();
}
