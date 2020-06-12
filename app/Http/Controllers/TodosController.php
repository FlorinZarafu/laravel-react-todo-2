<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;

class TodosController extends Controller
{
    public function index(){
        return Todo::all();
    }
    public function store(Request $request){
        return Todo::create($request->all());
    }
    public function update(Request $request,$id){
        $todo = Todo::findOrFail($id);
        $todo->update($request->all());
        return $todo;
    }
    public function delete($id){
        $todo = Todo::findOrFail($id);
        $todo->delete();
        return 204;
    }
}
