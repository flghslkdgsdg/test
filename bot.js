client.on('message', msg => {
  if (msg.content === '$ping') {
   msg.reply('? سرعة استجابة البوت ');
  }
});
