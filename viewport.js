/**
 * Created by chrome on 2016/8/13.
 */

// 如果屏幕太小(<1200px)，让viewport缩放到合适的比例
function viewport() {
    var screenWidth = window.innerWidth;
    if (screenWidth < 1200) {
        var scale = screenWidth / 1200;
        var myMetaContent = "width=1200, initial-scale=%scale%, user-scalable=no".replace("%scale%", scale);
        document.getElementsByTagName('meta')[1].content = myMetaContent
    }
}


viewport();
