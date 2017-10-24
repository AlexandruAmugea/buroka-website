import KEYS from '../const/const';
const viewSliderInstaFeed = require('raw-loader!../views/sliderInstaFeed.html');

galleryCtrl.$inject = ['instagramService', '$scope'];
function galleryCtrl(instagramService, $scope) {

    $scope.options = {
        pages: null,
        activePage: null,
        numberOfPreviewImages: 8
    };
    $scope.pictures         = [];
    $scope.allPictures      = [];
    $scope.selectedImage    = [];

    instagramService.getMediaFromUserById({
        userId: KEYS.instagramUser,
        access_token: KEYS.instagramToken,
    }).then(function(_data){
        $scope.picturesArray = [];
        for(var i = 0; i < 100; i++) {
            _data.data.data.forEach(function(elem){
                $scope.picturesArray.push(elem);
            });
        };
        console.log(_data);
        createDataForPages($scope.picturesArray);
    });

    $scope.nextPage = function(){
        $scope.options.activePage += 1;
        $scope.pictures = $scope.allPictures[$scope.options.activePage -1];
    };

    $scope.prevPage = function(){
        $scope.options.activePage -= 1;
        $scope.pictures = $scope.allPictures[$scope.options.activePage - 1];
    };
    
    var createDataForPages = function(data){
        $scope.options.pages = Math.round(data.length / $scope.options.numberOfPreviewImages);
        $scope.options.activePage = 1;
        for(var i = 0; i < $scope.options.pages; i++) {
            $scope.allPictures.push(data.slice(0,8));
            data.splice(0,8);
        };
        $scope.pictures = $scope.allPictures[$scope.options.activePage - 1];
        $scope.selectedImage = $scope.pictures[0];
    };

    $scope.changePreview = function(image){
        $scope.selectedImage = image;
    };
        
}

export default galleryCtrl;