/**
 * Created by dennis on 2/24/15.
 */



var kipsoen = angular.module('StudentController', ['ParentController']);

kipsoen.controller('StudentListCtrl', ['$scope', 'StudentsFactory', 'StudentFactory', 'ExaminationFactory', '$location',
    function ($scope, StudentsFactory, StudentFactory, ExaminationFactory, $location) {

        // callback for ng-click 'editStudent':
        $scope.editStudent = function (studentId) {
            $location.path('/student-detail/' + studentId);
        };



        $scope.result = function $email(studentId) {
            $location.path('/result-detail/' + studentId);
        };

        $scope.parent = function $email(studentId) {
            $location.path('/parent-detail/' + studentId);
        };

        // callback for ng-click 'deleteStudent':
        $scope.deleteStudent = function (studentId) {
            StudentFactory.delete({ id: studentId });
            $scope.students = StudentsFactory.query();
        };


       /* $scope.deleteExamination = function (studentId) {
            ExaminationFactory.delete({ id: studentId });
            $scope.students = StudentsFactory.query();
        };*/

        // callback for ng-click 'createStudent':
        $scope.createNewStudent = function () {
            $location.path('/student-creation');
        };

        $scope.students = StudentsFactory.query();
    }]);

kipsoen.controller('StudentDetailCtrl', ['$scope', '$routeParams', "ParentsFactory", 'StudentFactory', '$location',
    function ($scope, $routeParams, ParentsFactory, StudentFactory, $location) {

        // callback for ng-click 'updateStudent':
        $scope.updateStudent = function () {
            StudentFactory.update($scope.student);
            $location.path('/student-list');
        };

        // callback for ng-click 'cancel':
        $scope.cancel = function () {
            $location.path('/student-list');
        };

        $scope.student = StudentFactory.show({id: $routeParams.id});

        $scope.parent = function $email(studentId) {
            $location.path('/parent-detail/' + studentId);
        };

        $scope.parents = ParentsFactory.query();

        $scope.classes = ['north', 'south'] ;
    }]);

kipsoen.controller('StudentCreationCtrl', ['$scope', 'StudentsFactory', 'ParentsFactory', 'ClassesFactory', '$location',
    function ($scope, StudentsFactory, ParentsFactory, ClassesFactory, $location) {

        // callback for ng-click 'createNewStudent':

        $scope.classes = ClassesFactory.query()

        $scope.parents = ParentsFactory.query()
        $scope.createNewStudent = function () {
            StudentsFactory.create($scope.student);
            $location.path('/student-list');


        }

        $scope.cancel = function () {
            $location.path('/student-list');
        };
    }]);