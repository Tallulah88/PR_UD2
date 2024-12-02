<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CsvController;
use App\Http\Controllers\JsonController;
use App\Http\Controllers\HelloWorldController;

Route::apiResource('csv', CsvController::class);
Route::apiResource('json', JsonController::class);
Route::apiResource('hello', HelloWorldController::class);